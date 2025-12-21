# LabTech-RH - Website Institucional

<div align="center">

![LabTech-RH Logo](/assets/images/logo2-pequena.png)

**Conectando sua empresa aos melhores talentos**

[Site Oficial](https://labtech-rh.com.br) | [Contato](mailto:labtech.rh.contato@gmail.com) | [WhatsApp](https://wa.me/5511983940107)

</div>

---

## Sobre o Projeto

Website institucional profissional desenvolvido para a **LabTech-RH**, uma consultoria especializada em Recursos Humanos focada em recrutamento, selecao e desenvolvimento de equipes. O site foi projetado para ser envolvente, convincente e extremamente profissional, incentivando visitantes a entrarem em contato.

### Objetivos

- Apresentar os servicos da LabTech-RH de forma clara e persuasiva
- Facilitar o contato entre clientes/candidatos e a empresa
- Demonstrar profissionalismo e expertise em RH
- Otimizar para mecanismos de busca (SEO)
- Proporcionar uma experiencia responsiva em todos os dispositivos

---

## Funcionalidades

### Pagina Inicial
- Hero section com descricao persuasiva
- Carrossel de clientes com animacao suave
- Botoes de call-to-action para WhatsApp
- Design moderno e profissional

### Servicos
- Apresentacao detalhada de 6 servicos principais:
  - Consultoria de RH
  - Recrutamento e Selecao
  - Treinamento e Desenvolvimento
  - Avaliacao Comportamental
  - Headhunting Executivo
  - Tech Recruiting

### Sobre Nos
- Historia da empresa
- Missao, Visao e Valores
- Abordagem humanizada e tecnologica

### Contato
- Formulario completo para clientes e candidatos
- Upload de arquivos (CV, documentos)
- Informacoes de contato (telefone, e-mail, WhatsApp)
- Validacao de formulario em tempo real

### Recursos Adicionais
- Design totalmente responsivo
- Botao flutuante do WhatsApp- Menu de navegacao fixo

[/]- Animacoes suaves e transicoes
- Otimizacao SEO basica
- Meta tags Open Graph
- Sitemap.xml e robots.txt
- Carrossel infinito de clientes

---

## Tecnologias Utilizadas

- **HTML5** - Estrutura semantica
- **CSS3** - Estilizacao moderna com variaveis CSS
- **JavaScript (Vanilla)** - Interatividade e funcionalidades
- **Google Fonts** - Tipografia (Inter + Playfair Display)
- **SVG Icons** - Icones vetoriais inline

---

## Estrutura do Projeto

```
mopage/
├── assets/
│   ├── css/
│   │   └── styles.css          # Estilos principais
│   ├── js/
│   │   └── script.js           # JavaScript principal
│   └── images/
│       ├── logo2-pequena.png    # Logo principal
│       ├── cliente1-4.jfif      # Logos dos clientes
│       └── ...
├── index.html                   # Pagina inicial
├── servicos.html                # Pagina de servicos
├── sobre.html                   # Pagina sobre nos
├── contato.html                 # Pagina de contato
├── sitemap.xml                  # Sitemap para SEO
├── robots.txt                   # Configuracao de crawlers
└── vercel.json                  # Configuracao de deploy
```

---

## Como Usar

### Pre-requisitos

Nenhum! Este e um site estatico que pode ser aberto diretamente no navegador.

### Instalacao Local

1. Clone o repositorio:
```bash
git clone https://github.com/seu-usuario/labtech-rh-website.git
cd labtech-rh-website
```

2. Abra o arquivo `index.html` no seu navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000
```

3. Acesse `http://localhost:8000` no navegador

### Deploy

O projeto esta configurado para deploy na **Vercel**:

1. Conecte seu repositorio GitHub a Vercel
2. Configure o dominio `labtech-rh.com.br`
3. O arquivo `vercel.json` ja esta configurado com:
   - Redirecionamento de www para dominio principal
   - Headers para sitemap.xml

---

## Paleta de Cores

O site utiliza uma paleta profissional baseada na identidade visual da LabTech-RH:

- **Azul Principal**: `#1A314D` - Profissionalismo e confianca
- **Rosa Destaque**: `#E05C8C` - Humanizacao e acessibilidade
- **Azul Secundario**: `#0C2B40` - Profundidade
- **Azul Claro**: `#F0F4F8` - Fundo suave
- **Cinza Escuro**: `#2C3E50` - Textos
- **Cinza Claro**: `#F5F7FA` - Fundos alternativos

---

## Responsividade

O site e totalmente responsivo e otimizado para:

- **Mobile** (< 480px)
- **Tablet** (768px - 968px)
- **Desktop** (> 968px)

### Breakpoints

```css
/* Mobile */
@media (max-width: 480px)

/* Tablet */
@media (max-width: 768px)

/* Desktop pequeno */
@media (max-width: 968px)
```

---

## SEO e Otimizacoes

### Meta Tags
- Meta description otimizada para cada pagina
- Keywords relevantes
- Open Graph tags para redes sociais
- Twitter Cards configurados

### Performance
- Imagens otimizadas
- CSS e JS minificaveis
- Carregamento assincrono de fontes
- Estrutura semantica HTML5

### Acessibilidade
- Atributos ARIA apropriados
- Navegacao por teclado
- Contraste de cores adequado
- Textos alternativos em imagens

---

## Formulario de Contato

O formulario de contato permite:

- Selecao entre Cliente/Empresa ou Candidato
- Campos obrigatorios validados
- Upload de arquivos (PDF, DOC, DOCX, TXT - max. 5MB)
- Formatacao automatica de telefone
- Validacao em tempo real

**Nota**: Atualmente o formulario simula o envio. Para producao, e necessario configurar um backend (PHP, Node.js, ou servico como Formspree/EmailJS).

---

## Contribuindo

Contribuicoes sao bem-vindas! Sinta-se a vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudancas (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## Licenca

Este projeto e propriedade da **LabTech-RH**. Todos os direitos reservados.

---

## Contato

**LabTech-RH**

- Email: [labtech.rh.contato@gmail.com](mailto:labtech.rh.contato@gmail.com)
- WhatsApp: [(11) 98394-0107](https://wa.me/5511983940107)
- Website: [labtech-rh.com.br](https://labtech-rh.com.br)
- Localizacao: Sao Paulo, Brasil

---

## Agradecimentos

- Google Fonts pela tipografia Inter e Playfair Display
- Comunidade de desenvolvedores web por recursos e inspiracao

---

<div align="center">

**Desenvolvido com dedicacao para LabTech-RH**

Se este projeto foi util, considere dar uma estrela!

</div>
