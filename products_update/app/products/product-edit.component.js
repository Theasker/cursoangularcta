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
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/observable/fromEvent');
require('rxjs/add/observable/merge');
var product_service_1 = require('./product.service');
var generic_validator_1 = require('../shared/generic-validator');
var ProductEditComponent = (function () {
    function ProductEditComponent(fb, route, router, productService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.pageTitle = 'Product Edit';
        // Use with the generic validation message class
        this.displayMessage = {};
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            productName: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least three characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            productCode: {
                required: 'Product code is required.'
            },
            starRating: {
                range: 'Rate the product between 1 (lowest) and 5 (highest).'
            }
        };
        // Define an instance of the validator for use with this form, 
        // passing in this form's set of validation messages.
        this.genericValidator = new generic_validator_1.GenericValidator(this.validationMessages);
    }
    Object.defineProperty(ProductEditComponent.prototype, "tags", {
        get: function () {
            //TODO
            return this.productForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //TODO: form reactivo
        this.productForm = this.fb.group({
            productName: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(3),
                    forms_1.Validators.maxLength(50)]],
            productCode: ['', forms_1.Validators.required],
            starRating: [''],
            tags: this.fb.array([]),
            description: '' // No tiene validadores, por lo que no hay q ponerlo en forma de array
        });
        // Read the product Id from the route parameter
        // observación del parámetro id de la url (observable)
        this.sub = this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.getProduct(id);
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        //TODO: observar los cambios en todos los campos del formulario
        var _this = this;
        this.productForm.valueChanges.subscribe(function (value) {
            console.log('valor que ha cambiado: ', value);
            _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
        });
        // Me suscribo al cambio de campoi productName del formulario
        this.productForm.get('productName').valueChanges.subscribe(function (value) {
            console.log('value: ', value);
        });
    };
    ProductEditComponent.prototype.addTag = function () {
        this.tags.push(new forms_1.FormControl());
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (product) { return _this.onProductRetrieved(product); }, function (error) { return _this.errorMessage = error; });
    };
    ProductEditComponent.prototype.onProductRetrieved = function (product) {
        if (this.productForm) {
            this.productForm.reset();
        }
        this.product = product;
        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        }
        else {
            this.pageTitle = "Edit Product: " + this.product.productName;
        }
        // Update the data on the form
        //TODO
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        //TODO
    };
    ProductEditComponent.prototype.saveProduct = function () {
        //TODO
    };
    ProductEditComponent.prototype.onSaveComplete = function () {
        //TODO
    };
    __decorate([
        core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }), 
        __metadata('design:type', Array)
    ], ProductEditComponent.prototype, "formInputElements", void 0);
    ProductEditComponent = __decorate([
        core_1.Component({
            templateUrl: './app/products/product-edit.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router, product_service_1.ProductService])
    ], ProductEditComponent);
    return ProductEditComponent;
}());
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map