import obtenerTam from "./autito.js";

describe("autitos", () => {
  it("deberia recibir [5, 5]", () => {
    expect(obtenerTam("5,5/1,2N/IAIAIAIAA")).toEqual([5, 5]);
  });
});
