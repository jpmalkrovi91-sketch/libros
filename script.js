// ==========================================================
// Sitio de autor — Juan Pablo Malkrovi
// JavaScript mínimo, pensado para leerse y editarse fácil.
//
// Hoy hace una sola cosa: los botones con clase «pendiente»
// (descargas que llegan en diciembre y el botón de café)
// muestran un aviso amable si alguien logra pulsarlos.
// Cuando actives un enlace real, quita la clase «pendiente»
// de ese botón en el HTML y este archivo no necesita cambios.
// ==========================================================

document.querySelectorAll(".pendiente").forEach(function (boton) {
  boton.addEventListener("click", function (evento) {
    evento.preventDefault();
    alert("Muy pronto: las descargas gratuitas llegan en diciembre de 2026.");
  });
});
