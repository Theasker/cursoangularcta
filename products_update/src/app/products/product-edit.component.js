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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/observable/fromEvent");
require("rxjs/add/observable/merge");
var Observable_1 = require("rxjs/Observable");
var product_service_1 = require("./product.service");
var number_validator_1 = require("../shared/number.validator");
var generic_validator_1 = require("../shared/generic-validator");
var ProductEditComponent = (function () {
    function ProductEditComponent(//TODO,
        fb, route, router, productService) {
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
            return this.productForm.get('tags');
        },
        enumerable: true,
        configurable: true
    });
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        //TODO: init form builder
        // El validador de starRating es un custom validador
        this.productForm = this.fb.group({
            productName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3), forms_1.Validators.maxLength(50)]],
            productCode: ['', forms_1.Validators.required],
            starRating: ['', [number_validator_1.NumberValidators.range(1, 5)]],
            tags: this.fb.array([]),
            description: ''
        });
        // Read the product Id from the route parameter
        this.sub = this.route.params.subscribe(function (params) {
            var id = +params['id'];
            _this.getProduct(id);
        });
    };
    ProductEditComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    // Método del ciclo de vida del Angular que se ejecuta cuando se han cargado todas las vistas del componente
    ProductEditComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //TODO
        // Control de eventos 'pérdida de foco'
        // Vamos a suscribirnos a los cambios de los elementos del formulario que transformaremos con 'map'
        var controlBlurs = this.formInputElements.map(function (formControl) {
            // Nos vamos a suscribir a cada elemento que pierda el foco y lo ponemos en un array llamado controlBlurs
            return Observable_1.Observable.fromEvent(formControl.nativeElement, 'blur');
        });
        // Array de observables de los cambios de los campos del formulario
        var array = [this.productForm.valueChanges];
        // Mezclamos los 2 observables de tiempo que ya están juntados en el array, porque tienen2 tipos de eventos diferentes
        // Esperamos 800 milisegundos entre evento y evento
        Observable_1.Observable.merge.apply(Observable_1.Observable, [array].concat(controlBlurs)).debounceTime(800).subscribe(function (value) {
            _this.displayMessage = _this.genericValidator.processMessages(_this.productForm);
        });
    };
    ProductEditComponent.prototype.addTag = function () {
        this.tags.push(new forms_1.FormControl());
    };
    ProductEditComponent.prototype.getProduct = function (id) {
        var _this = this;
        //TODO
        this.productService.getProduct(id).subscribe(function (product) {
            _this.onProductRetrieved(product);
        }, function (error) {
            _this.errorMessage = error;
            console.log('Error al recuperar el producto: ', error);
        });
    };
    ProductEditComponent.prototype.onProductRetrieved = function (product) {
        //TODO
        this.productForm.reset(); // Eliminamos los valores de los campos del formulario
        this.product = product;
        // Saber si estoy en alta o edición del producto
        if (this.product.id === 0) {
            this.pageTitle = 'Alta de producto';
        }
        else {
            this.pageTitle = 'Modificación de producto';
        }
        // Cargar los datos en el formulario
        // patchValue: Carga parcial de los elementos de un formulario
        this.productForm.patchValue({
            productName: this.product.productName,
            productCode: this.product.productCode,
            starRating: this.product.starRating,
            description: this.product.description,
        });
        this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
    };
    ProductEditComponent.prototype.deleteProduct = function () {
        var _this = this;
        //TODO: distinguir entre altas y ediciones...
        if (this.product.id === 0) {
            this.onSaveComplete();
        }
        if (confirm("Seguro que quiere borrar el producto " + this.product.productName)) {
            this.productService.deleteProduct(this.product.id).subscribe(function () {
                _this.onSaveComplete();
            }, function (error) {
                _this.errorMessage = error;
                console.log('Error al borrar el producto: ', error);
            });
        }
        ;
    };
    ProductEditComponent.prototype.saveProduct = function () {
        var _this = this;
        //TODO
        // Controlamos si se ha tocado algún campo del formulario
        if (this.productForm.dirty && this.productForm.valid) {
            // Recogemos el JSON de los valores del formulario
            // assign(): Va de derecha a izaquierda, almacenando los datos ->
            // this.productForm.value se asigna a la variable this.prodcut que tiene tipo IPproduct
            // y finalmente lo agregamos al objeto vacío {}
            //let product: IProduct = Object.assign({}, this.product, this.productForm.value);
            this.product = Object.assign({}, this.product, this.productForm.value);
            this.productService.saveProduct(this.product).subscribe(function () {
                _this.onSaveComplete();
            }, function (error) {
                console.log('error: ', error);
                _this.errorMessage = error;
            });
        }
    };
    ProductEditComponent.prototype.onSaveComplete = function () {
        // Reset the form to clear the flags 
        // y se va al listado de productos
        //TODO
        this.productForm.reset();
        this.router.navigate(['/products']);
    };
    return ProductEditComponent;
}());
__decorate([
    core_1.ViewChildren(forms_1.FormControlName, { read: core_1.ElementRef }),
    __metadata("design:type", Array)
], ProductEditComponent.prototype, "formInputElements", void 0);
ProductEditComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/products/product-edit.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.ActivatedRoute,
        router_1.Router,
        product_service_1.ProductService])
], ProductEditComponent);
exports.ProductEditComponent = ProductEditComponent;
//# sourceMappingURL=product-edit.component.js.map