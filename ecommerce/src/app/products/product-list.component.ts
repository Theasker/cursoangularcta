import { Component, OnInit } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Lista de productos';
  private _listFilter: string;
  public products: IProduct[] = [];
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  shotTitle: boolean = true;

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

  // Inyección de dependencias que inyectamos del servicio
  // y no hace falta instanciarlo al ser un servicio y haberlo inyectado.
  constructor(
    private _productService: ProductService
  ) {

  }

  ngOnInit() {
    this.products = this._productService.getProducts();
    this.filteredProducts = this.products;
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

  changeView(data: any) {
    console.log('data: ', data);
    this.shotTitle = data.show;
    return this.shotTitle;
  }
}
