// Seleccionamos el navbar y el menú hamburguesa
const navbar = document.querySelector('.navbar');
const menuIcon = document.querySelector('.menu-icon');
const navbarItems = document.querySelector('.navbar-items');

// Escuchamos el evento de scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled'); // Agregamos la clase 'scrolled'
    } else {
        navbar.classList.remove('scrolled'); // La quitamos si estamos arriba
    }
});

// Funcionalidad del menú hamburguesa
menuIcon.addEventListener('click', function() {
    console.log('Menu icon clicked'); 
    navbarItems.classList.toggle('show'); // Alterna la clase 'show' para mostrar/ocultar el menú
});


// Cerrar el menú al hacer clic en un enlace
const navbarLinks = document.querySelectorAll('.navbar-item');
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarItems.classList.remove('show'); // Ocultar el menú al hacer clic en un enlace
    });
   });
