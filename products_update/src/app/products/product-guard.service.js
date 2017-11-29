"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductDetailGuard = (function () {
    function ProductDetailGuard(router) {
        this.router = router;
    }
    ProductDetailGuard.prototype.canActivate = function (route) {
        /*
            http://localhost:4200/products/1
            route.ur[0] = products
            route.ur[1] = 1
         */
        // el + castea a number
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            console.log('Id inválido');
            // Vuelvo al listado
            this.router.navigate(['\products']);
            // Si no se cumple el criterio de validación se devuelve false y se interrumpe la navegación
            return false;
        }
        // Se cumple el criterio de la navegación
        return true;
    };
    return ProductDetailGuard;
}());
ProductDetailGuard = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], ProductDetailGuard);
exports.ProductDetailGuard = ProductDetailGuard;
var ProductEditGuard = (function () {
    function ProductEditGuard() {
    }
    ProductEditGuard.prototype.canDeactivate = function (component) {
        /*
        avisar al usuario al salir del formulario de edición
        habiendo hecho cambios sin guardar
        */
        // Comprobamos si se ha modificado el formulario
        if (component.productForm.dirty) {
            var productName = component.productForm.get('productName').value;
            return confirm("\u00BFEst\u00E1 seguro de cancelar sin guardar los datos del producto " + productName + "?");
        }
        return true;
    };
    return ProductEditGuard;
}());
ProductEditGuard = __decorate([
    core_1.Injectable()
], ProductEditGuard);
exports.ProductEditGuard = ProductEditGuard;
//# sourceMappingURL=product-guard.service.js.map