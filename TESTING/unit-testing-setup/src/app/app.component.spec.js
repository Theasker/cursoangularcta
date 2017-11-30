"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("./app.component");
describe('AppComponent test', function () {
    var component;
    beforeEach(function () {
        component = new app_component_1.AppComponent();
    });
    it('name esta ninicializado con el valor Angular', function () {
        // Espero que la variable name del componente sea igual a
        expect(component.name).toBe('Angular');
    });
    it('name el valor Angular X', function () {
        // Si cambiamos el valor de una variable name concuerda con lo que hemos cambiado
        component.name = 'Angular X';
        expect(component.name).toBe('Angular X');
    });
});
//# sourceMappingURL=app.component.spec.js.map