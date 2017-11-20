import { Component, OnInit } from '@angular/core';

import { IProduct } from './product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = 'Lista productos';
  private _listFilter: string;
  //products:IProduct[] = [];
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  
  products:IProduct[] = [
    {
      id:1,
      name:'Producto 1',
      code: 'P-1',
      releaseDate: "1 de Diciembre",
      description: "Producto de limpieza de cocina",
      price: 12.90,
      rating: 7,
      imageUrl: "https://images.ssstatic.com/detergente-liquido-brisa-marina-1-5l-23766472s0-13460167.png"
    },
    {
      id:2,
      name:'Producto 2',
      code: 'P-2',
      releaseDate: "2 de Diciembre",
      description: "Producto de limpieza de parquet",
      price: 10.90,
      rating: 2,
      imageUrl: "https://images.ssstatic.com/detergente-liquido-brisa-marina-1-5l-23766472s0-13460167.png"
    },
    {
      id:3,
      name:'Producto 3',
      code: 'P-3',
      releaseDate: "3 de Diciembre",
      description: "Producto de limpieza de baños",
      price: 18.00,
      rating: 9,
      imageUrl: "https://images.ssstatic.com/detergente-liquido-brisa-marina-1-5l-23766472s0-13460167.png"
    }
  ];
  

  get listFilter():string {
    return this._listFilter;
  }

  set listFilter(value: string){
    this._listFilter = value;
  }

  constructor() { }

  ngOnInit() {
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }

}
