import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// Control de los errores y debug de los observables
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  // Declaración de una constante de clase
  static readonly IMAGETEMP: string = '';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    // Nos devuelve un orbservable que tenemos que castear para que tengamos los datos como necesitamos
    return this._http.get<IProduct[]>('./api/products/products.json').
      do(data => console.log('data: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
