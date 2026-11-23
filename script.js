// ==========================================================
// Sitio de autor — Juan Pablo Malkrovi
// JavaScript mínimo, pensado para leerse y editarse fácil.
//
// Hace dos cosas:
// 1. Los botones con clase «pendiente» (las descargas que
//    llegan en diciembre) muestran un aviso amable si alguien
//    logra pulsarlos. El botón de café ya está activo y no
//    lleva esa clase.
// 2. Cada botón «Ver sinopsis completa» muestra u oculta el
//    resto de la descripción de su libro, y cambia su texto
//    a «Ocultar sinopsis» cuando el texto está desplegado.
// ==========================================================

document.querySelectorAll(".pendiente").forEach(function (boton) {
  boton.addEventListener("click", function (evento) {
    evento.preventDefault();
    alert("Muy pronto: las descargas gratuitas llegan en diciembre de 2026.");
  });
});

document.querySelectorAll(".boton-sinopsis").forEach(function (boton) {
  boton.addEventListener("click", function () {
    var resto = boton.nextElementSibling;
    var abierto = boton.getAttribute("aria-expanded") === "true";
    resto.hidden = abierto;
    boton.setAttribute("aria-expanded", String(!abierto));
    boton.textContent = abierto ? "Ver sinopsis completa" : "Ocultar sinopsis";
  });
});
