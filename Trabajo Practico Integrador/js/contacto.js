const form = document.getElementById("myForm");
const resultTextArea = document.getElementById("resultTextArea");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // evita que el formulario se envíe


  // Obtener los valores de los campos del formulario
  const nombre= document.getElementById("nombre").value;
  const correoElectronico = document.getElementById("correoelectronico").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  const contacto = document.querySelector('input[name="contacto"]:checked').value;
  const horario = document.querySelector('select option:checked').textContent;
  const novedades = document.querySelector('input[type="checkbox"]').checked ? "Sí" : "No";

  // Concatenar los valores en un string y mostrarlos en el textarea/consola
  const result = `Nombre: ${nombre}\nCorreo Electrónico: ${correoElectronico}\nTeléfono: ${telefono}\nMensaje: ${mensaje}\nContacto: ${contacto}\nHorario: ${horario}\n¿Le gustaría recibir novedades de ProAr?: ${novedades}`;
  resultTextArea.value = result;
  console.log(result);

  //Una vez enviado el formulario, limpiamos los campos
  form.reset();
  
});