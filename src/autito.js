function obtenerTam(cadena) {
  let partes = cadena.split("/");

  let coordenadas = partes[0].split(",");

  return [parseInt(coordenadas[0]), parseInt(coordenadas[1])];
}

function posInicial(cadena) {
  let partes = cadena.split("/");

  let posinicial = partes[1];
  let ultimaComa = posinicial.lastIndexOf(",");

  let primerValor = parseInt(posinicial.slice(0, ultimaComa));
  let segundoValor = parseInt(posinicial.slice(ultimaComa + 1, -1));
  let direccion = posinicial.slice(-1);

  return [primerValor, segundoValor, direccion];
}

function movimientos(cadena) {
  let partes = cadena.split("/");
  let mov = partes[2];
  return mov;
}

function validarComandos(cadena) {
  const tam = obtenerTam(cadena);
  const pos = posInicial(cadena);
  const mov = movimientos(cadena);

  let dir = pos[2];

  let x = pos[0];
  let y = pos[1];

  let limiteX = tam[0];
  let limiteY = tam[1];

  for (let i of mov) {
    if (i !== "A") {
      if (i === "I") {
        switch (dir) {
          case "N":
            dir = "O";
            break;
          case "O":
            dir = "S";
            break;
          case "S":
            dir = "E";
            break;
          case "E":
            dir = "N";
          default:
            break;
        }
      }
      if (i === "D") {
        switch (dir) {
          case "N":
            dir = "E";
            break;
          case "O":
            dir = "N";
            break;
          case "S":
            dir = "O";
            break;
          case "E":
            dir = "S";
          default:
            break;
        }
      }
    } else {
      switch (dir) {
        case "N":
          if ( y < limiteY - 1) {
            y = y + 1;
          }
          break;
        case "E":
          if ( x < limiteX - 1) {
            x = x + 1;
          }
          break;
        case "S":
          if (y > 0 ) {
            y = y - 1;
          }
          break;
        case "O":
          if (x > 0 ) {
            x = x - 1;
          }
          break;
        default:
          break;
      }
    }
  }
  return [x, y, dir];
}

export { obtenerTam, posInicial, movimientos, validarComandos };
