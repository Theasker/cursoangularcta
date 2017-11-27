import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IProduct } from './product';
import { ProductService } from './product.service';

import { NumberValidators } from '../shared/number.validator';
import { GenericValidator } from '../shared/generic-validator';

@Component({
    templateUrl: './app/products/product-edit.component.html'
})
export class ProductEditComponent implements OnInit, AfterViewInit, OnDestroy {
    // Hace referencia a elementos que hay enbevidos dentro del código (template).
    @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

    pageTitle: string = 'Product Edit';
    errorMessage: string;

    //TODO: declaración del formulario 'reactivo'
    // Definimos la variable que guarda el formulario para acceder a el
    productForm: FormGroup;

    product: IProduct;
    private sub: Subscription;

    // Use with the generic validation message class
    displayMessage: { [key: string]: string } = {};
    private validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    get tags(): FormArray {
        //TODO
        return <FormArray>this.productForm.get('tags');
    }

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService) {

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
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        //TODO: form reactivo
        this.productForm = this.fb.group({
            productName: ['', [
                Validators.required, 
                Validators.minLength(3), 
                Validators.maxLength(50)]],
            productCode: ['', Validators.required],
            starRating: [''],
            tags: this.fb.array([]),
            description: '' // No tiene validadores, por lo que no hay q ponerlo en forma de array
        });

        // Read the product Id from the route parameter
        // observación del parámetro id de la url (observable)
        this.sub = this.route.params.subscribe(
            params => {
                const id = params['id'];
                this.getProduct(id);
            }
        );
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    ngAfterViewInit(): void {
        //TODO: observar los cambios en todos los campos del formulario

        this.productForm.valueChanges.subscribe(
            value => {
                console.log('valor que ha cambiado: ', value);
                this.displayMessage = this.genericValidator.processMessages(this.productForm);
            }
        );
        // Me suscribo al cambio de campoi productName del formulario
        this.productForm.get('productName').valueChanges.subscribe(
            value => {
                console.log('value: ', value);
            }
        );
    }

    addTag(): void {
        this.tags.push(new FormControl());
    }

    getProduct(id: number): void {
        this.productService.getProduct(id)
            .subscribe(
                (product: IProduct) => this.onProductRetrieved(product),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onProductRetrieved(product: IProduct): void {
        if (this.productForm) {
            this.productForm.reset();
        }
        this.product = product;

        if (this.product.id === 0) {
            this.pageTitle = 'Add Product';
        } else {
            this.pageTitle = `Edit Product: ${this.product.productName}`;
        }

        // Update the data on the form
        //TODO
    }

    deleteProduct(): void {
        //TODO
    }

    saveProduct(): void {
        //TODO
        
    }

    onSaveComplete(): void {
        //TODO
    }
}
