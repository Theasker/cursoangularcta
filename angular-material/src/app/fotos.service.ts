import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FotosService {
  static readonly APIURL: string = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private _http: HttpClient
  ) {  }

  public getFotos(): Observable<any[]> {
    return this._http.get<any[]>(FotosService.APIURL);
  }

}
