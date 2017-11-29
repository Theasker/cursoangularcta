import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, CanDeactivate } from '@angular/router';
import { ProductEditComponent } from './product-edit.component';

@Injectable()
export class ProductDetailGuard implements CanActivate {
    constructor(
        private router: Router
    ){}

    canActivate(route: ActivatedRouteSnapshot): boolean  {
        /* 
            http://localhost:4200/products/1
            route.ur[0] = products
            route.ur[1] = 1
         */
        // el + castea a number
        const id = +route.url[1].path;

        if (isNaN(id) || id < 1) {
            console.log('Id inválido');
            // Vuelvo al listado
            this.router.navigate(['\products']);
            // Si no se cumple el criterio de validación se devuelve false y se interrumpe la navegación
            return false;
        }
        // Se cumple el criterio de la navegación
        return true;
    }
}

@Injectable()
export class ProductEditGuard implements CanDeactivate<ProductEditComponent> {
    canDeactivate(component: ProductEditComponent): boolean  {
        /* 
        avisar al usuario al salir del formulario de edición 
        habiendo hecho cambios sin guardar
        */
        // Comprobamos si se ha modificado el formulario
        if (component.productForm.dirty) {
            const productName = component.productForm.get('productName').value;
            return confirm(`¿Está seguro de cancelar sin guardar los datos del producto ${productName}?`);
        }
        return true;
    }
}
