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

