const menuIcon = document.querySelector('.menu-icon');
const navbarItems = document.querySelector('.navbar-items');

// Agrega un event listener para abrir/cerrar el menú
menuIcon.addEventListener('click', () => {
    navbarItems.classList.toggle('show'); // Alterna la clase "show"
});



document.querySelectorAll('.navbar-item, .logo').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();  // Evita el comportamiento por defecto del enlace
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start'
            });
        }
    });
   }); 

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // Cambia el valor 50 según el punto donde quieras que se vuelva blanco
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
   });


  
  // Seleccionamos todos los enlaces del navbar
  const navItems = document.querySelectorAll('.navbar-item');

  // Función para detectar la sección activa
  function activateSection() {
      let scrollPosition = window.scrollY;

      navItems.forEach(item => {
          let section = document.querySelector(item.getAttribute('href'));
          
          // Verificamos si la sección está en la pantalla
          if (section.offsetTop <= scrollPosition && 
              section.offsetTop + section.offsetHeight > scrollPosition) {
              item.classList.add('active');  // Marcamos el enlace como activo
          } else {
              item.classList.remove('active');  // Quitamos la clase si no está visible
          }
      });
  }

  // Llamamos a la función al hacer scroll
  window.addEventListener('scroll', activateSection);

  // Desplazamiento suave al hacer clic en un enlace del navbar
  navItems.forEach(item => {
      item.addEventListener('click', function(e) {
          e.preventDefault();  // Prevenir el comportamiento por defecto

          let section = document.querySelector(this.getAttribute('href'));

          // Hacer scroll suave a la sección
          window.scrollTo({
              top: section.offsetTop,
              behavior: 'smooth'
          });
      });
   });

/*PARTE DE MAPA*/

