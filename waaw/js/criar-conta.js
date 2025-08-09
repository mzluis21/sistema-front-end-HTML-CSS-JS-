// menu mobile
const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menu = document.getElementById('menu');
const hamburger = document.getElementById('hamburger');
const desktopNav = document.getElementById('desktop-nav');
const desktopTitle = document.getElementById('title');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();

  nav.classList.toggle('active');
  hamburger.classList.toggle('active');

  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  event.currentTarget.setAttribute('aria-label', active ? 'Fechar Menu' : 'Abrir Menu');

  // Quando abrir o menu mobile
  if (active && window.innerWidth <= 1100) {
    // Adiciona o título
    if (!document.getElementById('mobile-title')) {
      const mobileTitle = desktopTitle.cloneNode(true);
      mobileTitle.id = 'mobile-title';
      menu.prepend(mobileTitle);
    }

    // Adiciona a navegação
    if (!document.getElementById('mobile-nav')) {
      const mobileNav = desktopNav.cloneNode(true);
      mobileNav.id = 'mobile-nav';
      menu.appendChild(mobileNav);
    }
  }

  // Quando fechar o menu mobile
  if (!active) {
    const mobileTitle = document.getElementById('mobile-title');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileTitle) mobileTitle.remove();
    if (mobileNav) mobileNav.remove();
  }
}


// cursor 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});

 // Animação do formulário
  ScrollReveal().reveal('.container-cadrastrar', {
    delay: 200,
    distance: '50px',
    origin: 'bottom',
    duration: 800,
    easing: 'ease-out',
    reset: false
  });

  // Animação dos cards de info (atendimento e pagamento)
  ScrollReveal().reveal('.cards-info .card', {
    interval: 200,
    origin: 'bottom',
    distance: '60px',
    duration: 800,
    easing: 'ease-out',
    reset: false
  });

  // Footer animado por colunas
  ScrollReveal().reveal('.footer-col', {
    interval: 150,
    origin: 'bottom',
    distance: '40px',
    duration: 700,
    reset: false
  });

  // Título e link "Entrar"
  ScrollReveal().reveal('.title, .link-entrar', {
    delay: 300,
    origin: 'top',
    distance: '30px',
    duration: 600,
    reset: false
  });

  // Logo animando da esquerda
  ScrollReveal().reveal('.image img', {
    origin: 'left',
    distance: '50px',
    duration: 1000
  });

  // Ícones do header (lupa, user, carrinho)
  ScrollReveal().reveal('.icons i', {
    interval: 100,
    origin: 'right',
    distance: '20px',
    duration: 600
  });