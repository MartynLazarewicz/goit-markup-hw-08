const btnHamburger = document.querySelector('#menuHamburger');
const header = document.querySelector('.header');
const menu = document.querySelector('.mobileMenu');
const hamburgerMenu = document.querySelector('.hamburger-lines');

btnHamburger.addEventListener('click', function () {
  if (header.classList.contains('open')) {
    // close hamburger
    // body.classList.remove('noscroll');
    header.classList.remove('open');
    menu.classList.add('is-hidden--menu');
    hamburgerMenu.classList.remove('hamburgerOpen');
  } else {
    // open hamburger
    // body.classList.add('noscroll');
    header.classList.add('open');
    menu.classList.remove('is-hidden--menu');
    hamburgerMenu.classList.add('hamburgerOpen');
  }
});
