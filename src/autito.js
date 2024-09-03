function obtenerTam(cadena) {
    let partes = cadena.split('/');
    
    let coordenadas = partes[0].split(',');

    return [parseInt(coordenadas[0]), parseInt(coordenadas[1])];
}

export default obtenerTam;