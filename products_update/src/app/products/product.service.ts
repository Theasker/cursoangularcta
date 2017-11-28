import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private baseUrl = 'api/products';

    constructor(private http: Http) { }

    getProducts(): Observable<IProduct[]> {
        return this.http.get(this.baseUrl)
            // Modifico para que me devuelva un Observable
            .map(this.extractData)
            .do( (data: any) => { console.log('data: ', data); })
            .catch(this.handleError);
    }

    getProduct(id: number): Observable<IProduct> {
        if (id === 0) { // Alta
            return Observable.of(this.initializeProduct());
        }else { // Edición
            const url = `${this.baseUrl}/${id}`;
            return this.http.get(url)
                // Modifico para que me devuelva un Observable
                .map(this.extractData)
                .do( (data: any) => { console.log('data: ', data); })
                .catch(this.handleError);
        }
    }

    deleteProduct(id: number): Observable<Response> {
        const url = `${this.baseUrl}/${id}`;

        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        return this.http.delete(url, options)
            .catch(this.handleError);
    }

    saveProduct(product: IProduct): Observable<IProduct> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});

        // discriminamos si es alta o edicicion
        if (product.id === 0) { // Alta
            return this.createProduct(product, options);
        }else { // Modificación
            return this.updateProduct(product, options);
        }
    }

    private createProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
        product.id = undefined;
        return this.http.post(this.baseUrl, product, options)
            .map(this.extractData)
            // Devolvemos los datos que hemos creado
            .do( (data: any) => {console.log('data: ', JSON.stringify(data));})
            .catch(this.handleError);
    }

    private updateProduct(product: IProduct, options: RequestOptions): Observable<IProduct> {
        const url = `${this.baseUrl}/${product.id}`;
        return this.http.put(url, product, options) // No devuelve nada 'put'
            .map( () => { return product; }) // Queremos devolver el producto actualizado
            .catch(this.handleError);
    }

    private extractData(response: Response) {
        let body = response.json();
        return body.data || {};
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    initializeProduct(): IProduct {
        // Return an initialized object
        return {
            id: 0,
            productName: null,
            productCode: null,
            tags: [''],
            releaseDate: null,
            price: null,
            description: null,
            starRating: null,
            imageUrl: null
        };
    }
}
