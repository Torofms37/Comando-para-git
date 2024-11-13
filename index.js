function toggleTheme() {
  const body = document.body;
  const themeToggleBtn = document.querySelector('.theme-toggle');
  const svgMoon = document.getElementById('moon');
  const svgSun = document.getElementById('sun');

  // Cambia entre temas
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');

  // Actualiza el contenido del botón
  if (body.classList.contains('dark-theme')) {
      themeToggleBtn.innerHTML = ''; // Limpia el contenido del botón
      const sunClone = svgSun.cloneNode(true);
      sunClone.style.display = 'inline'; // Asegúrate de que el clon esté visible
      themeToggleBtn.appendChild(sunClone); // Añade el SVG del sol
  } else {
      themeToggleBtn.innerHTML = ''; // Limpia el contenido del botón
      const moonClone = svgMoon.cloneNode(true);
      moonClone.style.display = 'inline'; // Asegúrate de que el clon esté visible
      themeToggleBtn.appendChild(moonClone); // Añade el SVG de la luna
  }
}
