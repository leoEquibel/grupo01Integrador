//toma el elemento y lo enlaza con la seccion correspondiente.
//Seccion "Que es ProAr"
const nosotros = document.getElementById('nosotros');
const btnQueEsProAr = document.querySelector('.headerPrincipal-nav-link[href="#nosotros"]');
btnQueEsProAr.addEventListener('click', () => {
  nosotros.scrollIntoView({ behavior: 'smooth' });
});

//seccion "Herramientas"
const herramientas = document.getElementById('container-herramientas');
const btnHerramientas = document.querySelector('.headerPrincipal-nav-link[href="#container-herramientas"]');
btnHerramientas.addEventListener('click', () => {
  herramientas.scrollIntoView({ behavior: 'smooth' });
});

// Obtener el elemento para mostrar la fecha y hora actual
const fechaHora = document.getElementById("fecha-hora");
		
// Función para actualizar la fecha y hora cada segundo
function actualizarFechaHora() {
  const ahora = new Date();
  const fecha = ahora.toLocaleDateString();
  const hora = ahora.toLocaleTimeString();
  fechaHora.textContent = `${fecha} - ${hora}`;
}

// Llamar a la función para actualizar la fecha y hora inicialmente
actualizarFechaHora();

// Llamar a la función cada segundo para actualizar la fecha y hora
setInterval(actualizarFechaHora, 1000);