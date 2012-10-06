// #### JASMINE SRC ####

//Constructor 'Cuenta Corriente'
function CuentaCorriente(titular, cuenta, saldo) {
    var _nombre = titular.nombre;
    var _apellido = titular.apellido;
    var _edad = titular.edad;
    var _cuenta = cuenta || "00000";
    var _saldo = saldo ? saldo : 15.3;

    this.getTitularNombre = function() {
        return _nombre;
    };
    this.getTitularApellido = function() {
        return _apellido;
    };
    this.getTitularEdad = function() {
        return _edad;
    };
    this.getTitularCuenta = function() {
        return _cuenta;
    };
    this.getTitularSaldo = function() {
        return _saldo;
    };
    var setSaldo = function(actualizarSaldo, tipo) {
        return (tipo) ? _saldo += actualizarSaldo : _saldo -= actualizarSaldo;
    };
    this.Ingresar = function(ingresarDinero) {
        return setSaldo(ingresarDinero, 1);
    };
    this.Reintegro = function(sacarDinero) {
        return setSaldo(sacarDinero, 0);
    };
    this.ImprimirCuenta = function() {
        return 'Cuenta: ' + _cuenta + ' - ' + 'Saldo: ' + _saldo;
    };
    this.ImprimirTitular = function() {
        return 'Nombre: ' + _nombre + ' - ' + 'Apellido: ' + _apellido + ' - ' + 'Edad: ' + _edad;
    };
    this.CompararCuentas = function(cuenta1, cuenta2) {
        return !!(cuenta1.getTitularCuenta() === cuenta2.getTitularCuenta());
    };
}

//Constructor 'Cuenta de Ahorro'
function CuentaAhorro(titular, cuenta, saldo, interes) {
    var _interes = interes ? interes : 2.5;

    //call()
    //https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/call
    CuentaCorriente.call(this, titular, cuenta, saldo);

    //Calcular interes
    this.getTitularInteres = function() {
        return _interes;
    };
    this.CalcularInteres = function() {
        var saldo = this.getTitularSaldo();
        var interes = this.getTitularInteres();
        var interesAnual = saldo * interes / 100;
        return this.Ingresar(interesAnual);
    }
}

//Cuenta de Ahorro hereda de Cuenta Corriente
//todas sus propiedades y metodos
CuentaAhorro.prototype = new CuentaCorriente();

//Constructor 'Titular'
function Titular(nombre, apellido, edad) {
    var nombreToUpper = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    var apellidoToUpper = apellido.charAt(0).toUpperCase() + apellido.slice(1);
    this.Datos = function() {
        return {
            "nombre": nombreToUpper,
            "apellido": apellidoToUpper,
            "edad": edad
        }
    };
    return this.Datos();
}