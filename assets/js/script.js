// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const submitButton = contactForm.querySelector('.btn-submit');
        const originalText = submitButton.textContent;
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
        
        try {
            // Enviar via Formly.email
            const response = await fetch('https://formly.email/submit', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // Log da resposta para debug
            console.log('Status da resposta:', response.status);
            console.log('Headers da resposta:', response.headers);

            // Tentar ler o texto da resposta primeiro
            const responseText = await response.text();
            console.log('Resposta do servidor (texto):', responseText);
            console.log('Content-Type:', response.headers.get('content-type'));

            if (!response.ok) {
                // Tentar parsear como JSON se possível
                let errorData;
                try {
                    errorData = JSON.parse(responseText);
                } catch (e) {
                    errorData = { error: responseText || `Erro HTTP ${response.status}` };
                }
                throw new Error(errorData.error || `Erro ao enviar formulário (Status: ${response.status})`);
            }
            
            // Verificar se a resposta é JSON
            const contentType = response.headers.get('content-type');
            let result;
            
            if (contentType && contentType.includes('application/json')) {
                // Se for JSON, tentar parsear
                try {
                    result = JSON.parse(responseText);
                } catch (e) {
                    console.warn('Resposta marcada como JSON mas não é válida:', responseText);
                    // Se status for 200, considerar como sucesso mesmo sem JSON válido
                    result = { success: true, message: 'Formulário enviado com sucesso' };
                }
            } else {
                // Se não for JSON mas status for 200, considerar sucesso
                console.log('Resposta não é JSON, mas status é OK. Considerando sucesso.');
                result = { success: true, message: responseText || 'Formulário enviado com sucesso' };
            }

            // Verificar se houve algum erro na resposta
            if (result.error) {
                throw new Error(result.error);
            }

            // Log opcional para debug
            console.log('Formulário enviado com sucesso:', result);
            
            // Show success message
            showNotification('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
            
            // Reset form
            contactForm.reset();
                        
            // Redirecionar após 2 segundos
            // setTimeout(() => {
            //     window.location.href = '/contato.html?enviado=sucesso';
            // }, 2000);
        } catch (error) {
            console.error('Erro completo ao enviar email:', error);
            console.error('Stack trace:', error.stack);
            
            // Show error message
            let errorMessage = 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.';
            
            if (error.message) {
                errorMessage = `Erro: ${error.message}`;
            }
            
            showNotification(errorMessage, 'error');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
}

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#e74c3c'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 400px;
        font-weight: 500;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Phone number formatting
const phoneInput = document.getElementById('telefone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length <= 2) {
                value = value;
            } else if (value.length <= 7) {
                value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            } else if (value.length <= 10) {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
            } else {
                value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
            }
            e.target.value = value;
        }
    });
}

// File upload validation
const fileInput = document.getElementById('arquivo');
if (fileInput) {
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        const maxSize = 5 * 1024 * 1024; // 5MB
        const allowedTypes = ['application/pdf', 'application/msword', 
                             'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
                             'text/plain'];
        
        if (file) {
            if (file.size > maxSize) {
                showNotification('O arquivo é muito grande. Tamanho máximo: 5MB', 'error');
                e.target.value = '';
                return;
            }
            
            if (!allowedTypes.includes(file.type)) {
                showNotification('Tipo de arquivo não permitido. Use PDF, DOC, DOCX ou TXT', 'error');
                e.target.value = '';
                return;
            }
        }
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards and other elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card, .info-card, .value-item');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
});

// Client carousel - ensure smooth infinite scroll
const carouselTrack = document.getElementById('carouselTrack');
if (carouselTrack) {
    // Pause animation on hover
    const carousel = document.getElementById('clientCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            carouselTrack.style.animationPlayState = 'paused';
        });
        
        carousel.addEventListener('mouseleave', () => {
            carouselTrack.style.animationPlayState = 'running';
        });
    }
}

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Add active class styles
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-pink);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

console.log('LabTech-RH website loaded successfully!');
