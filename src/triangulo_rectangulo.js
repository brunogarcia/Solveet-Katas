//Jasmine Src
function Triangulo_Rectangulo(cateto) {
    this.cateto = cateto;
    this.figura = "*";

    this.Comprobar_Cateto = function() {
        return !!(this.cateto > 0 && this.cateto <= 10);
    };

    this.Crear_Figura = function(valor) {
        while (valor > 0) {
            console.log(this.figura + '\n');
            this.figura += '*';
            valor--;
        }
    };

    this.Init = function() {
        if (this.Comprobar_Cateto()) {
            this.Crear_Figura(this.cateto);
        }
    };

    return this.Init();
}