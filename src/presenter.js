import {obtenerTam, posInicial, movimientos } from "./autito.js";


const comands = document.querySelector("#comandos");
const form = document.querySelector("#autito-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const com = comands.value;

  const arrTam = obtenerTam(com);
  const arrPosIni = posInicial(com);
  const cadenaMov = movimientos(com);

  div.innerHTML = "<p> Dimensión de la superficie: " + arrTam[0] + ", " + arrTam[1] + "</p>" + 
                  "<p> Posicion y Direccion inicial: " + arrPosIni[0] + ", " + arrPosIni[1] + arrPosIni[2] + "</p>" +
                  "<p> Movimientos: " + cadenaMov + "</p>"; 
});
