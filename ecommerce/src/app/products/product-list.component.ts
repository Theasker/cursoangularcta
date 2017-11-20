import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Declaración de una constante de clase
  static readonly IMAGETEMP: string = 'https://dummyimage.com/600x400/000/fff';
  pageTitle: string = 'Lista de productos';
  private _listFilter: string;
  public products: IProduct[] = [];
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;

  filteredProducts: Array<IProduct> = [];

  public get listFilter(): string{
    // proceso de control antes de la devolución
    return this._listFilter;
  }

  public set listFilter(value: string) {
    // proceso antes de asignación
    this._listFilter = value;
    // Comprobamos que hay algo escrito en la caja de busqueda
    // para aplicar el filtro o no aplicarlo y mostrar todos los productos
    this.filteredProducts = this.listFilter ? this.performFilter(this._listFilter) : this.products;
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
        rating: 7.52,
        imageUrl: ProductListComponent.IMAGETEMP
      },
      {
        id: 2,
        name: 'Producto2',
        code: 'P-2',
        releaseDate: '2 de Diciembre',
        description: 'Producto de 2',
        price: 15.55,
        rating: 5.3,
        imageUrl: ProductListComponent.IMAGETEMP
      },
      {
        id: 3,
        name: 'Producto3',
        code: 'P-3',
        releaseDate: '3 de Diciembre',
        description: 'Producto de 3',
        price: 122.90,
        rating: 2.95,
        imageUrl: ProductListComponent.IMAGETEMP
      },
    ];
    this.filteredProducts = this.products;
  }

  ngOnInit() {
  }

  // Filtrado en el array del texto por el que queremos filtrar en la caja de texto
  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct): boolean => {
      return product.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
