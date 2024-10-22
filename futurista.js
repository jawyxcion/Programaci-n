// Simple JS to scroll to sections
document.querySelectorAll('.navbar-item').forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.querySelector('span').innerText.toLowerCase();
      document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    });
  });