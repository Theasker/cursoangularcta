import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { IProduct } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
  pageTitle: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {
    this.pageTitle = 'Detalle de producto';
  }

  ngOnInit() {
    // Obtenemos el parámetro (método 1)
    const id: number = +(this._route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;

    // Obtenemos el parámetro (método 2)
    this._route.params.forEach((params: Params ) => {
      console.log('params.id: ', params.id);
    });

    this._productService.getProductById(id).subscribe( (p) => {
      this.product = p;
    });
  }
}
