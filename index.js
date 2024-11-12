function toggleTheme() {
  const body = document.body;
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const svgMoon = document.getElementById('moon'); 
  const svgSun = document.getElementById('light');
  
  // Cambia entre temas
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
  
  // Actualiza el texto del botón
  if (body.classList.contains('dark-theme')) {
    themeToggleBtn.svgMoon.style.display = 'none'; 
    themeToggleBtn.svgSun.style.display = 'block';
  } else {
    themeToggleBtn.svgMoon.style.display = 'block'; 
    themeToggleBtn.svgSun.style.display = 'none';
  }
}