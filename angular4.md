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
        - [Directivas](#directivas)
            - [Colecciones de elementos (Arrays) y directiva *ngFor](#colecciones-de-elementos-arrays-y-directiva-ngfor)
            - [*ngIf y "else"](#ngif-y-else)
        - [Property Binding](#property-binding)
            - [[class]](#class)
            - [Interpolación con variables en el template](#interpolación-con-variables-en-el-template)
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

Creo un modelo Alumno:
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

## Referencias oficiales y enlaces

Profesor: **`ricardo.jaume@pue.es`**

* Documentación oficial de Angular en https://angular.io/
* Documentación oficial de Typescript en http://www.typescriptlang.org/docs/home.html
* [Angular-cli](https://cli.angular.io/)