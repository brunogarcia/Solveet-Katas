//Jasmine Spec

describe("Crear un triangulo rectangulo isosceles", function() {
    var triangulo_rectangulo,
        triangulo_rectangulo_excede,
        triangulo_rectangulo_negativo;

    beforeEach(function() {
        triangulo_rectangulo = new Triangulo_Rectangulo(5);
        triangulo_rectangulo_excede = new Triangulo_Rectangulo(11);
        triangulo_rectangulo_negativo = new Triangulo_Rectangulo(-1);
    });

    it("El cateto debe ser mayor que 0 y menor o igual que 10", function() {
        expect(triangulo_rectangulo.Comprobar_Cateto()).toEqual(true);
        expect(triangulo_rectangulo_excede.Comprobar_Cateto()).toEqual(false);
        expect(triangulo_rectangulo_negativo.Comprobar_Cateto()).toEqual(false);

    });
});