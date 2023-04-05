const form = document.getElementById("myForm");
const resultTextArea = document.getElementById("resultTextArea");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita que el formulario se envíe

  // Obtener los valores de los campos del formulario
  const nombreApellido = document.getElementById("nombreapellido").value;
  const correoElectronico = document.getElementById("correoelectronico").value;
  const telefono = document.getElementById("telefono").value;
  const mensaje = document.getElementById("mensaje").value;
  const contacto = document.querySelector('input[name="contacto"]:checked').value;
  const horario = document.querySelector('select option:checked').textContent;
  const novedades = document.querySelector('input[type="checkbox"]').checked ? "Sí" : "No";

  // Concatenar los valores en un string y mostrarlos en el textarea
  const result = `Nombre y Apellido: ${nombreApellido}\nCorreo Electrónico: ${correoElectronico}\nTeléfono: ${telefono}\nMensaje: ${mensaje}\nContacto: ${contacto}\nHorario: ${horario}\n¿Le gustaría recibir novedades de ProAr?: ${novedades}`;
  resultTextArea.value = result;
});
