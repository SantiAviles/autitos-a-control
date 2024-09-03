import obtenerTam from "./autito.js";

const comands = document.querySelector("#comandos");
const form = document.querySelector("#autito-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const com = comands.value;

  const arr = obtenerTam(com);

  div.innerHTML = "<p> Dimensión de la superficie: " + arr[0] + ", " + arr[1] + "</p>";
});
