// ========================================
// LabTech-RH - Static Site JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', function() {
  // ========================================
  // NAVBAR
  // ========================================
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbarToggle');
  const navbarMobile = document.getElementById('navbarMobile');
  
  // Scroll effect
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  navbarToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navbarMobile.classList.toggle('active');
  });
  
  // Close mobile menu on link click
  document.querySelectorAll('.navbar-mobile-link, .navbar-mobile .btn-primary').forEach(function(link) {
    link.addEventListener('click', function() {
      navbarToggle.classList.remove('active');
      navbarMobile.classList.remove('active');
    });
  });
  
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // ========================================
// CONTACT FORM (SEM INTERFERIR NO SUBMIT)
// ========================================
const contactForm = document.getElementById('contactForm');
const fileInput = document.getElementById('file');
const fileLabel = document.getElementById('fileLabel');

if (fileInput) {
  fileInput.addEventListener('change', function () {
    if (this.files && this.files[0]) {
      const file = this.files[0];
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain'
      ];

      if (!allowedTypes.includes(file.type)) {
        alert('Arquivo inválido. Use PDF, DOC, DOCX ou TXT.');
        this.value = '';
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Arquivo muito grande. Máximo 5MB.');
        this.value = '';
        return;
      }

      if (fileLabel) {
        fileLabel.textContent = file.name;
      }
    }
  });
}

  
  // ========================================
  // SCROLL ANIMATIONS
  // ========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements
  document.querySelectorAll('.section-header, .card-professional, .service-card, .value-card').forEach(function(el) {
    observer.observe(el);
  });
});

// Add CSS for spinner
const style = document.createElement('style');
style.textContent = `
  .spinner {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
document.head.appendChild(style);