import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Control de los errores y debug de los observables
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  // Declaración de una constante de clase
  static readonly IMAGETEMP: string = '';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    // Nos devuelve un orbservable que tenemos que castear para que tengamos los datos como necesitamos
    return this._http.get<IProduct[]>('./api/products/products.json').
      do(data => {
        // Visualizamos los datos para localizar un posible error
        // console.log('data: ' + JSON.stringify(data));
      })
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  // Devolvemos el elmento 0 de un array que hemos filtrado del total de elementos
  // Con map devuelve un observable tranformado con lo que hagamos en la función de callback
  getProductById(id: number): Observable<IProduct> {
    return this.getProducts().map( (items) => {
      return items.find( (item) => item.id === id );
    });
  }

  // Obtener un sólo registro pasando el id como parámetro con Promises
  getProduct(id: number): Promise<IProduct> {
    return new Promise( (resolve, reject) => {
      /* resolve({name: 'Procuto 10'}); */
      /* reject('No se ha encontrado el producto'); */
      this.getProducts().subscribe( 
        (data) => {
          let p = data.find((item) => item.id === id);
          if (p !== null) { // si se ha encontrado...
            resolve(p);
          }else { // NO ha dado error, pero no ha encontrado ningún registro
            resolve(null);
          }
        }, (error) => {
          reject('Ha habido un erro en la obtención de productos');
        }
      );
    });
  }
}
