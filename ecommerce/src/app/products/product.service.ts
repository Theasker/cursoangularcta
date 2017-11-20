import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  // Declaración de una constante de clase
  static readonly IMAGETEMP: string = 'https://dummyimage.com/600x400/000/fff';

  constructor() { }

  getProducts(): Array<IProduct> {
    return [
      {
        id: 1,
        name: 'Producto1',
        code: 'P-1',
        releaseDate: '1 de Diciembre',
        description: 'Producto de limpieza',
        price: 12.90,
        rating: 2,
        imageUrl: ProductService.IMAGETEMP
      },
      {
        id: 2,
        name: 'Producto2',
        code: 'P-2',
        releaseDate: '2 de Diciembre',
        description: 'Producto de 2',
        price: 15.55,
        rating: 3,
        imageUrl: ProductService.IMAGETEMP
      },
      {
        id: 3,
        name: 'Producto3',
        code: 'P-3',
        releaseDate: '3 de Diciembre',
        description: 'Producto de 3',
        price: 122.90,
        rating: 2,
        imageUrl: ProductService.IMAGETEMP
      },
    ];
  }

}
