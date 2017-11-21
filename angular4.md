# Curso Angular 2

<!-- TOC -->

- [Curso Angular 2](#curso-angular-2)
    - [Instalación y creación de un proyecto](#instalación-y-creación-de-un-proyecto)
        - [Creación de un proyecto](#creación-de-un-proyecto)
    - [Arquitectura Angular](#arquitectura-angular)
        - [`index.html`](#indexhtml)
        - [Componente principal](#componente-principal)
        - [Metadatos de un componente](#metadatos-de-un-componente)
        - [Interpolación](#interpolación)
        - [Trabajo con componentes](#trabajo-con-componentes)
            - [app.module.ts](#appmodulets)
            - [Creación de templates y styles inline](#creación-de-templates-y-styles-inline)
        - [Ciclo de vida de un componente](#ciclo-de-vida-de-un-componente)
            - [ngOninit](#ngoninit)
            - [ngOnChanges](#ngonchanges)
        - [Directivas](#directivas)
            - [Colecciones de elementos (Arrays) y directiva *ngFor](#colecciones-de-elementos-arrays-y-directiva-ngfor)
            - [*ngIf y "else"](#ngif-y-else)
        - [Property Binding](#property-binding)
            - [[class]](#class)
            - [Interpolación con variables en el template](#interpolación-con-variables-en-el-template)
        - [Pipes](#pipes)
            - [Custom Pipes](#custom-pipes)
            - [Pipe async](#pipe-async)
        - [Intercambio de información entre componentes](#intercambio-de-información-entre-componentes)
            - [@Input](#input)
            - [@Output](#output)
        - [Inyección de dependencias](#inyección-de-dependencias)
        - [Observables en Angular](#observables-en-angular)
        - [Promesas](#promesas)
        - [Enrutamiento](#enrutamiento)
    - [TypeScript](#typescript)
        - [Instalación](#instalación)
        - [Tipado de devolución de una función](#tipado-de-devolución-de-una-función)
        - [Visibilidad de variables y funciones](#visibilidad-de-variables-y-funciones)
        - [(click)](#click)
    - [angular-cli](#angular-cli)
        - [Generación](#generación)
    - [Referencias oficiales y enlaces](#referencias-oficiales-y-enlaces)

<!-- /TOC -->

## Instalación y creación de un proyecto

Instalamos angular de manera global en el sistema **teniendo instalado antes nodejs**:
````bash
npm install -g @angular/cli
````

### Creación de un proyecto

````bash
ng new my-app
````

Ejecutamos la aplicación con el servidor que nos suministra Angular
````bash
cd my-app
ng serve --open
````

o también
````
npm start
````

## Arquitectura Angular

### `index.html`

Es un conjunto de módulos que dentro de cada uno hay una serie de componentes.

````html
<base href="/">
````

Todos los vínculos que pongamos en la aplicación partirán de `/`

### Componente principal

````html
<app-root></app-root>
````
Sería la etiqueta asignada a un componente de Angular. En el `index.html` principal de la aplicación **sólo puede haber un componente principal**, lo que quiere decir que sólo hay un `tag` que referencia a este componente principal.

En `app.module.ts` está la definición de los componentes de la aplicación. 

### Metadatos de un componente

````javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
````

* **selector**: Tag del componente, es decir, es el tag de html asignado para este componente a la hora de referenciarlo en un template.
* **templateUrl**: Nombre y localización del componente.
* **styleUrls**: Nombre y localización de los estilos CSS del componente.

### Interpolación

Acceso o interpolación del contenido de una variable de una clase de un componente desde un template por medio de las dobles llaves `{{nombre_variable}}`. Es unidireccional, es decir sólo carga los datos de la variable de la clase y se visualiza en el template, y no al revés.

````
{{title}}
````
Carga el contenido de la variable `title` del componente.

### Trabajo con componentes

Cada vez que creamos un nuevo componente `nombre.component.ts` hay que referenciarlo en el módulo principal `app.module.ts`.

**Cada componente sólo puede pertenecer a un módulo.**

Generación de un componente en una carpeta:
````bash
ng generate component app/components/second-component
````

Una vez referenciado el componente en el `app.module.ts`, podremos

#### app.module.ts
````javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HolaMundoComponent} from '../components/hola-mundo.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [HolaMundoComponent]
})
export class AppModule { }
````

* **bootstrap**: Referenciamos el componentes que se ejecuta al iniciar el módulo principal, aunque pueden ser varios componentes, de ahí que sea un array.
* **declarations**: Todos los componentes que forman parte del módulo.
* **imports**: Para importar los módulos que necesitemos, internos de Angular o externos propios necesarios para la aplicación.
  * **BrowserModule**: Módulo de Angular para la introducción de tags especiales en las plantillas.
  * **providers**: Array para cargar los servicios de nuestra aplicación.

Todas las clases de los componentes, para que se puedan usar en otros componentes o en otros lugares de la aplicación hay que exportar esa clase con la palabra reservada **`export`**.

Antes de usar cada uno de los componentes y agregarlo al apartado **declarations**, hay que importar el fichero del lugar en el que esté.

````javascript
import {HolaMundoComponent} from '../components/hola-mundo.component';
````

#### Creación de templates y styles inline

Usando las el carácter `\``, se pueden poner estilos en línea sin tener que concatenar strings.

````javascript
...
@Component({
    selector: 'hola-mundo',
    template: `
    <h1>{{titulo}}</h1>
    <div class="hola-mundo">
        <p>Esta es una prueba de componente insertado.</p>
    </div>`,
    styles: [`
    .hola-mundo {
        color: green;
        font-size: 1.3em;
        font-style: bold;
    }`]
})
...
````

### Ciclo de vida de un componente

#### ngOninit

Este es el primer método que se ejecuta en un componente. Se usa para llamar a métodos que queremos que se ejecuten al comienzo de la llamada a la clase. Cuando se ejectua el DOM está totalmente cargado.

````javascript
import { Component, OnInit } from '@angular/core';
...
export class PersonaComponent implements OnInit{
    ngOninit(){
        this.actualizarDatos("Mauricio", 44);
    }

    actualizarDatos(let nombre: string, let edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }
}
````

#### ngOnChanges

Se ejecuta cada vez que se modifica alguna propiedad del componente.

### Directivas

#### Colecciones de elementos (Arrays) y directiva *ngFor

````javascript
...
constructor() {
    this._alumnos = [
      new Alumno("Mauri",18,"Angular"), 
      new Alumno("Mauri2",19,"Angular2"),
      new Alumno("Mauri3",20,"Angular3"),
      new Alumno("Mauri4",21,"Angular4"),
    ]
  }
...
````
Luego para reproducirlo en la plantilla
````html
<ul>
  <li *ngFor="let alumno of _alumnos; index as i; first as primero;">
    {{i+1}} - {{primero}} - Nombre: {{alumno.nombre}} // Edad: {{alumno.edad}} // Curso: {{alumno.curso}}
  </li>    
</ul> 
````

#### *ngIf y "else"

Con el `then` nombramos el bucle `ng-template` que se mostrará cuando **no se cumpla** la condición.

````html
<ul *ngIf="_verListado">
  <li *ngFor="let alumno of _alumnos; index as i; first as primero; last as ultimo">
    {{i+1}} - {{primero}} - {{ultimo}} - 
    <span *ngIf="primero;else losdemas" class="textoRojo">
        Nombre: {{alumno.nombre}} // Edad: {{alumno.edad}} // Curso: {{alumno.curso}}
    </span>
    <ng-template #losdemas>
        Nombre: {{alumno.nombre}} // Edad: {{alumno.edad}} // Curso: {{alumno.curso}}
    </ng-template>
  </li>    
</ul>
````

Controlar un botón para mostrar o ocultar el resultado
````html
<p *ngIf="_verListado === false">
  <button (click)="verResultado();">Ver resultado</button>
</p>
<p *ngIf="_verListado === true">
  <button (click)="verResultado();">Ocultar resultado</button>
</p>
````

### Property Binding

Diferentes comunicaciones entre partes de Angular

* **(click)="metodo()"** Eventos del tempalte a la lógica en la clase.
* **{{interpolación}}**: Lógica al template
* **[(ngModel)]**: Bidireccional del template a la lógica y al revés.
* **[class]**: Properti binding -> Pasamos información de la lógica al template

Se pone entre corchetes para pasar información 

#### [class]

Si es el primer elemento se le aplica la clase `textoRojo`:
````html
Resultados de alumnos:
<ul *ngIf="_verListado">
  <li *ngFor="let alumno of _alumnos; index as i; first as primero; last as ultimo">
    <span [class.textoRojo] = "primero">
      {{i+1}} - {{primero}} - {{ultimo}} - 
      Nombre: {{alumno.nombre}} // Edad: {{alumno.edad}} // Curso: {{alumno.curso}}
    </span>    
  </li>    
</ul>
````

#### Interpolación con variables en el template

Primero declaramos una variable que llenaremos en el campo de texto:
````javascript
private _nombreUsuario: string;
````
````html
<p>
    <input type="text" #nombre placeholder="Nombre Alumno">
    <button (click)="nombreUsuario = nombre.value">Mostrar Nombre</button>
    Visualizado por: {{nombreUsuario}}
</p>
````

### Pipes

Filtros para formatear la salida de datos en las plantillas. No modifican el dato, sólo a la hora de mostrarlo. 

Se pueden encadenar varios pipes.

#### Custom Pipes

Creación de un filtro que sustituye un caracter dado como parámetro en el filtro con espacios:

`convert-to-spaces.pipe.ts`
````typescript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

  transform(value: any, character: string): any {
    return value.replace(character, ' ');
  }

}
````

Luego para usarlo en la plantilla. El parámetro se pasa poniendo ":" y después con comillas:
````html
<td>{{product.code | convertToSpaces: '-'}}</td>
````

#### Pipe async

El envío a la plantilla es asíncrono. Una forma de sustituir la recepción de datos de un observable, delegando la asincronía al pipe async en vez de a la lógica de la clase.

### Intercambio de información entre componentes

#### @Input

Queremos renderizar las estrellas de un ranking que es un componente propio de cada uno de los registros donde está el dato numérico del ranking.

En la plantilla origen del modelo, pasamos como parámetro a la etiqueta del componente hijo (`<app-star></app-star>`):

`product-list.component.ts` (componente padre):
````html
<td><app-star [rating]="product.rating"></app-star></td>
````

Luego en el componente hijo (`star.component.ts`) creamos el decorador `@Input` con el nombre de la variable que recogerá el parámetro pasado por el padre.
````typescript
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Input() rating: number;
````

#### @Output

Creación de un evento click, que pasa una llamada de un evento al componente padre:

* **Componente padre**: `product-list.component.ts`
* **Componente hijo**: `star.component.ts`

En el componente hijo usamos del decorador `@Output` creamos una variable de tipo `EventEmitter<type>` y la tipamos con el tipo de variable que se va a pasar, y en el template creamos el evento que usaremos para crear el evento de tipo `EventEmitter` que pasará la variable:


`star.component.html`
````html
<div (click)="onClick()">

````

`star.component.ts`
````typescript
import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  ...
})

export class StarComponent implements OnInit, OnChanges {
  @Output() ratingClicked: EventEmitter<any>;
  ...
````

Luego en el componente padre recogemos el evento creado `ratingClicked` y se lo asignamos a un método de la clase padre con la palabra reservada `$event` que captura los datos del evento, por ejemplo, changeView($event)

`product-list.component.html`
```html
<app-star [rating]="product.rating" (ratingClicked)="changeView($event)"></app-star>
```

`product-list.component.ts`
```typescript
...
changeView(data: any) {
    console.log('data: ', data);
    this.shotTitle = data.show;
    return this.shotTitle;
}
...
```

### Inyección de dependencias

Creamos un servicio:

`product.service.ts`
````typescript
import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  // Declaración de una constante de clase
  static readonly IMAGETEMP: string = '';

  constructor(
    private _http: HttpClient
  ) { }

  getProducts(): Array<IProduct> {
    // Nos devuelve un orbservable
    // this._http.get('./api/products/products.json')
    return null;
  }
}
````

Luego lo inyectamos en el constructor como parámetro y tipado de la clase donde lo vayamos a usar. Al estar inyectado como dependencia, ya no necesitamos instanciar la clase del servicio.

`product-list.component.ts`
````typescript
import { ProductService } from './product.service';

export class ProductListComponent implements OnInit {
  ...
  // Inyección de dependencias que inyectamos del servicio
  // y no hace falta instanciarlo al ser un servicio y haberlo inyectado.
  constructor(private _productService: ProductService) {
````

### Observables en Angular

* http://blog.enriqueoriol.com/2017/05/comunicacion-servicio-componente-en-angular.html

El agente se suscribe a la línea de tiempo, hasta que nos dessuscribimos o la aplicación termina. Cada vez que llega un evento a esta línea de tiempo, nos avisa y podemos hacer una acción. Los datos que nos llegan del evento pueden llegar en formato raw o los podemos modificar para que nos lleguen como los necesitamos.

Los procesos que haya que ejecutar con los datos que se van a recibir del observable, tendremos que esperar a los datos, por lo que tendrán que estar dentro de la recepción de los mismos.

`app.module.ts`
````typescript
import { HttpClientModule } from '@angular/common/http';
...
@NgModule({
  ...
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
````

Creas la línea de tiempo (Observable) para que luego desde los componentes se puedan suscribir para recibir los diversos eventos que sucedan.

`product.service.ts`
````typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IProduct } from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  // Declaración de una constante de clase
  static readonly IMAGETEMP: string = '';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    // Nos devuelve un orbservable que tenemos que castear para que tengamos los datos como necesitamos
    return this._http.get<IProduct[]>('./api/products/products.json');
  }
}
````

En el componente, nos suscribimos al observable que nos devuelve el servicio, y este observable, puede acabar correctamente o no, y actuar en consecuencia.

`product-list-component.ts`
````typescript
ngOnInit() {
    this._productService.getProducts().subscribe((
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      }), (error) => {
        console.log('error: ', error);
    });
  }
````

Servicio con control de errores del observable:

`product.service.ts`
````typescript
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
    return Observable.throw(err.message)
  }
}
````

### Promesas

* http://www.formandome.es/javascript/promises-y-deferreds-en-jquery/

Las promesas actúan con un evento específico y cuanto termina la devolución de datos (o error) termina.

### Enrutamiento

## TypeScript

### Instalación

```bash
npm install -g typescript
```
Para compilar:
````bash
tsc helloworld.ts
````
Es un **lenguaje de programación tipado**, al contrario que javascript.

### Tipado de devolución de una función

````javascript
verResultado(): number{
  return 10;
}
````

### Visibilidad de variables y funciones

Si no se pone ningún modificador de acceso, la variable es **protected**

Aunque una variable sea privada, el template asociado si que tiene acceso.

Por convención las variables privadas se inician su nombre con un "_".

Los atributos (variables de clase) suelen ser siempre privadas y las propiedades (getter y setters) son publicas

Creo un modelo Alumno, `alumno.model.ts`:
````javascript
export class Alumno{
    private _nombre: string;
    private _edad: number;
    private _curso: string;

    get nombre(): string {
        return this._nombre;
    }
    
    get edad(): number {
        return this._edad;
    }

    get curso(): string {
        return this._curso;
    }

    set nombre(n: string) {
        this._nombre = n;
    }

    set edad(r: number) {
        this._edad = r;
    }

    set curso(c: string) {
        this._curso = c;
    }

    constructor (n:string, e:number, c:string) {
        this._nombre = n;
        this._edad = e;
        this._curso = c;
    }
}
````

Luego para poder usarlo hay primero que importarlo en el componente que queramos usar.

````javascript
  import { Component, OnInit, ViewEncapsulation } from '@angular/core';
  import { Alumno } from '../../../models/alumno.model';
  ...
  constructor() {
    this._nombre = 'Mauri';
    this._alumno = new Alumno("Mauri",18,"Angular");
  }

  private verDatosAlumno(): string{
    let datos: string;
    datos = `El nombre del alumno de nombre ${this._alumno.nombre} 
      de edad ${this._alumno.edad} en el curso ${this._alumno.curso}.`;
    return datos;
  }
  ...
````



### (click)

Al hacer click en el botón, llama a la función `verResultado()`:
````html
<button (click)="verResultado();">Ver resultado</button>
````

## angular-cli

### Generación

* Creación de un nuevo proyecto: `ng new my-app`
* Generación de un componente en una carpeta: `ng generate component components/second-component`
* Generación de un componente sin carpeta y diciendole donde: `ng generate component components/second-component --flat --spec false` (no creamos el fichero de testing *.spec.ts).
* Crear un Custom Pipe: `ng generate pipe shared/convert-to-spaces`

## Referencias oficiales y enlaces

Profesor: **`ricardo.jaume@pue.es`**

* http://veyon.io/ --> Monitorización de ordenadores de aulas

* Documentación oficial de Angular en https://angular.io/
* Documentación oficial de Typescript en http://www.typescriptlang.org/docs/home.html
* [Angular-cli](https://cli.angular.io/)