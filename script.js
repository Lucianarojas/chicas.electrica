const botonMenu = document.querySelector("#boton-menu");
const navegacion = document.querySelector("#navegacion");
const botonModo = document.querySelector("#boton-modo");

botonMenu.addEventListener("click", () => {
  const estaAbierto = navegacion.classList.toggle("abierto");
  botonMenu.setAttribute("aria-expanded", String(estaAbierto));
});

document.querySelectorAll(".navegacion a").forEach((enlace) => {
  enlace.addEventListener("click", () => {
    navegacion.classList.remove("abierto");
    botonMenu.setAttribute("aria-expanded", "false");
  });
});

botonModo.addEventListener("click", () => {
  const modoOscuro = document.body.classList.toggle("modo-oscuro");
  botonModo.textContent = modoOscuro ? "Modo claro" : "Modo oscuro";
});
