import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IAlumn } from '../interfaces/alumn.interface';

@Injectable()
export class AlumnService {
  // Declaración de una constante de clase
  static readonly APIURL: string = 'http://localhost:3000/alumns';
  
  private _alumn: IAlumn;
  private _alumns: IAlumn[] = [];

  // Inyectamos la dependencia de HttpClient
  constructor(
    private _http: HttpClient
  ) { }

  getAlumns(): Observable<IAlumn[]> {
    // Nos devuelve un orbservable que tenemos que castear para que tengamos los datos como necesitamos
    return this._http.get<IAlumn[]>(AlumnService.APIURL);
  }
/* 
  getProducts(): Observable<IProduct[]> {
    // Nos devuelve un orbservable que tenemos que castear para que tengamos los datos como necesitamos
    return this._http.get<IProduct[]>('./api/products/products.json').
      do(data => {
        // Visualizamos los datos para localizar un posible error
        // console.log('data: ' + JSON.stringify(data));
      })
      .catch(this.handleError);
  } */

}
