import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FotosService {
  static readonly PHOTOS: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private _http: HttpClient
  ) { }

  getPhotos(): Observable<IProduct[]> {
    // Nos devuelve un orbservable que tenemos que castear para que tengamos los datos como necesitamos
    return this._http.get<IProduct[]>(FotosService.PHOTOS).
      do(data => {
        // Visualizamos los datos para localizar un posible error
        // console.log('data: ' + JSON.stringify(data));
      })
      .catch(this.handleError);
  }

}
