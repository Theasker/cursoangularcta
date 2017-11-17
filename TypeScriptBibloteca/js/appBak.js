var Persona = /** @class */ (function () {
    function Persona(nom, dni) {
        this._nombre = nom;
        this._dni = dni;
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "dni", {
        get: function () {
            return this._dni;
        },
        enumerable: true,
        configurable: true
    });
    Persona.prototype.findById = function (dni) {
        return new Persona('', '');
    };
    return Persona;
}());
function main() {
    // Inicializar 5 personas
    for (var i = 0; i < 5; i++) {
        var p = new Persona('Name' + (i + 1), 'dni' + (i + 1));
        personas.push(p);
    }
}
function viewInfo() {
    // Para recorrer los índices
    for (var index in personas) {
        console.log("Indice: " + index);
    }
    console.log('============================================');
    for (var _i = 0, personas_1 = personas; _i < personas_1.length; _i++) {
        var p = personas_1[_i];
        console.log("Propiedad de clase: " + p.nombre);
    }
}
var personas = [];
main();
viewInfo();
//# sourceMappingURL=appBak.js.map