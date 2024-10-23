// Simple JS to scroll to sections
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.querySelector('span').innerText.toLowerCase();
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.side-navbar');
    const content = document.querySelector('.content');
    const contactBar = document.querySelector('.contact-bar');

    // Ajustar posición del contenido basado en el ancho del navbar
    navbar.addEventListener('mouseenter', function() {
        content.style.marginLeft = '250px';
        contactBar.style.paddingLeft = '250px';
    });

    navbar.addEventListener('mouseleave', function() {
        content.style.marginLeft = '100px';
        contactBar.style.paddingLeft = '100px';
    });
});

// Función para confirmar el cierre de sesión
function confirmLogout() {
  // Muestra un cuadro de confirmación
  const confirmation = confirm("¿Estás seguro que deseas cerrar la sesión?");
  if (confirmation) {
      // Si el usuario acepta, redirige a index.html
      window.location.href = 'index.html';
    }
}