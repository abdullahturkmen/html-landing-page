const menu = document.querySelector('.main-menu');
const menuOpen = document.querySelector('.menu-open-btn');
const menuClose = document.querySelector('.menu-close-btn');

menuOpen.addEventListener('click', event => {
    menu.classList.add('open');
  });

  menuClose.addEventListener('click', event => {
    menu.classList.remove('open');
  });