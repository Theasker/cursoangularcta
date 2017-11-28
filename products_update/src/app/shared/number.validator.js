"use strict";
var NumberValidators = (function () {
    function NumberValidators() {
    }
    //TODO: custom validator (en esta caso método estático)
    NumberValidators.range = function (min, max) {
        // Si devuelve true es que NO ha validado
        // Si devuelve null es que ha ido correcto
        return function (c) {
            if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
                return { 'range': true };
            }
            return null;
        };
    };
    return NumberValidators;
}());
exports.NumberValidators = NumberValidators;
//# sourceMappingURL=number.validator.js.map