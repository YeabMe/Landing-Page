// Sticky header
const header = document.querySelector("header");
window.addEventListener ("scroll", function() {
header.classList.toggle ("sticky", window.scrollY > 0);
});

// initialization of aos
    AOS.init({
      duration: 650,
      once: true
    });

// Menu Icon
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('navbar1');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

windows.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};
