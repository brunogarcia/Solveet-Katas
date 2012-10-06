
// #### JASMINE SPEC ####
describe("El Banco es capaz de", function() {
    var bruno_datos, eva_datos, pepe_datos,
        bruno_cuenta_corriente, eva_cuenta_corriente, pepe_cuenta_corriente,
        bruno_cuenta_ahorro, pepe_cuenta_ahorro;

    beforeEach(function() {
        bruno_datos = new Titular("bruno", "garcia", "36");
        eva_datos = new Titular("eva", "santos", "36");
        pepe_datos = new Titular("pepe", "perez", "40");
        bruno_cuenta_corriente = new CuentaCorriente(bruno_datos, "12345");
        bruno_cuenta_ahorro = new CuentaAhorro(bruno_datos, "12345");
        eva_cuenta_corriente = new CuentaCorriente(eva_datos, "24680");
        pepe_cuenta_corriente = new CuentaCorriente(pepe_datos, "13579");
        pepe_cuenta_ahorro = new CuentaAhorro(pepe_datos, "13579", 2000, 7);
    });

    it("Crear una Cuenta Corriente", function() {
        expect(bruno_cuenta_corriente.getTitularNombre()).toEqual("Bruno");
        expect(bruno_cuenta_corriente.getTitularApellido()).toEqual("Garcia");
        expect(bruno_cuenta_corriente.getTitularEdad()).toEqual("36");
        expect(bruno_cuenta_corriente.getTitularCuenta()).toEqual("12345");
        expect(bruno_cuenta_corriente.getTitularSaldo()).toEqual(15.3);
    });

    it("Crear una Cuenta de Ahorro", function() {
        expect(bruno_cuenta_ahorro.getTitularNombre()).toEqual("Bruno");
        expect(bruno_cuenta_ahorro.getTitularApellido()).toEqual("Garcia");
        expect(bruno_cuenta_ahorro.getTitularEdad()).toEqual("36");
        expect(bruno_cuenta_ahorro.getTitularCuenta()).toEqual("12345");
        expect(bruno_cuenta_ahorro.getTitularSaldo()).toEqual(15.3);
        expect(bruno_cuenta_ahorro.getTitularInteres()).toEqual(2.5);
    });

    it("Crear una Cuenta de Ahorro con saldo e interes personalizado", function() {
        expect(pepe_cuenta_ahorro.getTitularNombre()).toEqual("Pepe");
        expect(pepe_cuenta_ahorro.getTitularApellido()).toEqual("Perez");
        expect(pepe_cuenta_ahorro.getTitularEdad()).toEqual("40");
        expect(pepe_cuenta_ahorro.getTitularCuenta()).toEqual("13579");
        expect(pepe_cuenta_ahorro.getTitularSaldo()).toEqual(2000);
        expect(pepe_cuenta_ahorro.getTitularInteres()).toEqual(7);
    });

    it("Realizar ingresos y reintegros", function() {
        expect(bruno_cuenta_corriente.Ingresar(15)).toEqual(30.3);
        expect(bruno_cuenta_corriente.Ingresar(0.2)).toEqual(30.5);
        expect(bruno_cuenta_corriente.Reintegro(15)).toEqual(15.5);
        expect(bruno_cuenta_corriente.Reintegro(0.2)).toEqual(15.3);
    });

    it("Calcular el interes de una Cuenta de Ahorro", function() {
        expect(bruno_cuenta_ahorro.CalcularInteres()).toEqual(15.682500000000001);
    });

    it("Imprimir los datos del titular y el numero de cuenta", function() {
        expect(bruno_cuenta_corriente.ImprimirCuenta()).toEqual('Cuenta: 12345 - Saldo: 15.3');
        expect(bruno_cuenta_corriente.ImprimirTitular()).toEqual('Nombre: Bruno - Apellido: Garcia - Edad: 36');
    });

    it("Verificar si dos cuentas son iguales", function() {
        expect(bruno_cuenta_corriente.CompararCuentas(bruno_cuenta_corriente, bruno_cuenta_ahorro)).toEqual(true);
        expect(bruno_cuenta_corriente.CompararCuentas(bruno_cuenta_corriente, pepe_cuenta_corriente)).toEqual(false);
    });

});

