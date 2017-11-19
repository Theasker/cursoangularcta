import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Lista de productos';
  private _listFilter: string;
  public products:IProduct[] = [];
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  private _imageTemp: string = 'https://dummyimage.com/600x400/000/fff';

  public get listFilter(): string{
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
  }

  constructor() {
    this.products = [
      {
        id: 1,
        name: 'Producto1',
        code: 'P-1',
        releaseDate: '1 de Diciembre',
        description: 'Producto de limpieza',
        price: 12.90,
        rating: 7,
        imageUrl: this._imageTemp
      },
      {
        id: 2,
        name: 'Producto2',
        code: 'P-2',
        releaseDate: '2 de Diciembre',
        description: 'Producto de 2',
        price: 15.50,
        rating: 5,
        imageUrl: this._imageTemp
      },
      {
        id: 3,
        name: 'Producto3',
        code: 'P-3',
        releaseDate: '3 de Diciembre',
        description: 'Producto de 3',
        price: 122.90,
        rating: 2,
        imageUrl: this._imageTemp
      },
    ];
  }

  ngOnInit() {
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
