import {obtenerTam, posInicial, movimientos, validarComandos} from "./autito.js";

describe("autitos", () => {
  it("deberia recibir [5, 5]", () => {
    expect(obtenerTam("5,5/1,2N/IAIAIAIAA")).toEqual([5, 5]);
  });
  it("Deberia recibir [1,2,'N']", () => {
    expect(posInicial("5,5/1,2N/IAIAIAIAA")).toEqual([1,2,"N"]);
  });
  it("Deberia recibir IAIAIAIAA", () => {
    expect(movimientos("5,5/1,2N/IAIAIAIAA")).toEqual("IAIAIAIAA");
  });
  it("Deberia devolver [1,3,N]", () => {
    expect(validarComandos("5,5/1,2N/IAIAIAIAA")).toEqual([1,3,"N"]);
  });
});

