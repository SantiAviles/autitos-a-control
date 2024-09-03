function obtenerTam(cadena) {
    let partes = cadena.split('/');
    
    let coordenadas = partes[0].split(',');

    return [parseInt(coordenadas[0]), parseInt(coordenadas[1])];
}

function posInicial(cadena) {
    let partes = cadena.split('/');

    let posinicial = partes[1];
    let ultimaComa = posinicial.lastIndexOf(',');

    let primerValor = parseInt(posinicial.slice(0, ultimaComa));
    let segundoValor = parseInt(posinicial.slice(ultimaComa + 1, -1));
    let direccion = posinicial.slice(-1);

    return [primerValor, segundoValor, direccion];
}

function movimientos(cadena){
    let partes = cadena.split('/');
    let mov = partes[2];
    return mov;

}

export {obtenerTam, posInicial, movimientos};