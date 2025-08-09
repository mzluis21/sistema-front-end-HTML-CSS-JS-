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



// carrossel div carrossel-banner
const textos = document.querySelectorAll('.texto');
const setaEsquerda = document.querySelector('.esquerda');
const setaDireita = document.querySelector('.direita');
let indice = 0;

function mostrarTexto(i) {
  textos.forEach(t => t.classList.remove('ativo'));
  textos[i].classList.add('ativo');
}

setaEsquerda.addEventListener('click', () => {
  indice = (indice - 1 + textos.length) % textos.length;
  mostrarTexto(indice);
});

setaDireita.addEventListener('click', () => {
  indice = (indice + 1) % textos.length;
  mostrarTexto(indice);
});

// auto slide
setInterval(() => {
  indice = (indice + 1) % textos.length;
  mostrarTexto(indice);
}, 8000);

let propCounter = 1;
const propRadios = document.querySelectorAll('input[name="radio-prop"]');

setInterval(() => {
  propCounter++;
  if (propCounter > propRadios.length) propCounter = 1;

  document.getElementById(`prop${propCounter}`).checked = true;
}, 8000);




// cursor 
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});


 
document.addEventListener("DOMContentLoaded", () => {
    // Troca de imagem ao passar o mouse
    document.querySelectorAll(".div-imagem").forEach(div => {
        const img = div.querySelector("img");
        const hoverSrc = div.getAttribute("data-hover");
        const leaveSrc = div.getAttribute("data-leave");

        div.addEventListener("mouseenter", () => {
            img.style.opacity = "0";
            setTimeout(() => {
                img.src = hoverSrc;
                img.style.opacity = "1";
            }, 200);
        });

        div.addEventListener("mouseleave", () => {
            img.style.opacity = "0";
            setTimeout(() => {
                img.src = leaveSrc;
                img.style.opacity = "1";
            }, 300);
        });
    });
})


ScrollReveal({ reset: false }); // mantém animação apenas uma vez

// Animações principais
ScrollReveal().reveal('.carrossel-banner', {
  delay: 200,
  origin: 'top',
  distance: '60px',
  duration: 1000,
  easing: 'ease-in-out',
});

ScrollReveal().reveal('.propagated', {
  delay: 400,
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  easing: 'ease-in-out',
});

ScrollReveal().reveal('.emphasis, .emphasis-WAAW', {
  delay: 200,
  origin: 'left',
  distance: '50px',
  duration: 800,
  interval: 100
});

ScrollReveal().reveal('.products', {
  delay: 200,
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  interval: 200
});

ScrollReveal().reveal('.grid-destaque .item', {
  delay: 300,
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  interval: 150
});

ScrollReveal().reveal('.newsletter-container', {
  delay: 400,
  origin: 'right',
  distance: '80px',
  duration: 1000,
});

ScrollReveal().reveal('.cards-info .card', {
  delay: 300,
  origin: 'bottom',
  distance: '50px',
  duration: 900,
  interval: 200
});

ScrollReveal().reveal('.footer', {
  delay: 200,
  origin: 'bottom',
  distance: '50px',
  duration: 900,
});

ScrollReveal().reveal('.product-card', { 
  delay: 200, 
  origin: 'bottom', 
  distance: '20px',
  interval: 100 
});

// Seleciona todos os botões e modais
const openButtons = [document.getElementById('openMenuModal'), document.getElementById('openModalBtn')];
const modals = document.querySelectorAll('.menu-modal');
const overlay = document.getElementById('menuOverlay');

// Ativar evento para cada botão e modal correspondente
openButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // impede que o clique feche o modal pelo evento global

        const modal = modals[index];
        const isOpen = modal.style.display === 'block';

        // Fecha todos antes de abrir o clicado
        modals.forEach(m => m.style.display = 'none');
        overlay.style.display = 'none';

        if (!isOpen) {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        }
    });
});

// Fechar se clicar no overlay
overlay.addEventListener('click', () => {
    modals.forEach(m => m.style.display = 'none');
    overlay.style.display = 'none';
});

// Fechar se clicar fora dos modais e dos botões
document.addEventListener('click', (e) => {
    if (
        ![...modals].some(m => m.contains(e.target)) &&
        !openButtons.some(btn => btn.contains(e.target))
    ) {
        modals.forEach(m => m.style.display = 'none');
        overlay.style.display = 'none';
    }
});

