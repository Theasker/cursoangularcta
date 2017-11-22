import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { IProduct } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: IProduct;
  pageTitle: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService,
  ) {
    this.pageTitle = 'Detalle de producto';
  }

  ngOnInit() {
    console.log('ngOnInit_detalle');
    // Obtenemos el parámetro (método 1)
    const id: number = +(this._route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;

    // Obtenemos el parámetro (método 2)
    this._route.params.subscribe(
      (data) => {
        console.log('data: ', data);
      }, (error) => {
        console.log('error: ', error);
      }
    );

    // Obtenemos el parámetro (método 3)
    this._route.params.forEach((params: Params ) => {
      console.log('params.id: ', params.id);
    });

    // Obtenemos un sólo producto con el id pasado como parámetro (Observable).
    this._productService.getProductById(id).subscribe( (p) => {
      this.product = p;
    });

    // Obtenemos un sólo producto con el id pasado como parámetro (Promises).
    this._productService.getProduct(id)
      .then(
        (data) => { // Nos devuelve el dato
          if (data !== null) {
            this.product = data;
            console.log('data: ', data);
          }
        }
      ).catch( // Ha habido un error
        (error) => {
          console.log('error: ', error);
        }
      );
  }

  ngOnDestroy(): void {
    console.log('ngDestroy_detalle');
  }

  back() {
    // Navegamos para volver por medio de código en la clase
    this._router.navigate(['/products']);

  }
}
