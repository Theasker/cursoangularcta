# Curso Angular 2

<!-- TOC -->

- [Curso Angular 2](#curso-angular-2)
    - [Instalación y creación de un proyecto](#instalación-y-creación-de-un-proyecto)
        - [Creación de un proyecto](#creación-de-un-proyecto)
    - [TypeScript](#typescript)
        - [Instalación](#instalación)
    - [Overview Angular](#overview-angular)
        - [`index.html`](#indexhtml)
        - [Componente principal](#componente-principal)
        - [Metadatos de un componente](#metadatos-de-un-componente)
        - [Interpolación](#interpolación)
        - [Creación de componentes](#creación-de-componentes)
    - [Referencias oficiales y enlaces](#referencias-oficiales-y-enlaces)

<!-- /TOC -->

## Instalación y creación de un proyecto

Instalamos angular de manera global en el sistema:
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

## TypeScript

### Instalación

```bash
npm install -g typescript
```
Para compilar:
````bash
tsc helloworld.ts
````

## Overview Angular

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
Sería la etiqueta asignada a un componente de Angular. En el `index.html` principal de la aplicación **sólo puede haber un componente principal**.

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

Acceso o interpolación del contenido de una variable de una clase de un componente desde un template por medio de las dobles llaves `{{nombre_variable}}`

````
{{title}}
````
Carga el contenido de la variable `title` del componente.

### Creación de componentes

Cada vez que creamos un nuevo componente `nombre.component.ts` hay que referenciarlo en el módulo principal `app.module.ts`.

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

* **bootstrap**: Referenciamos todos los componentes que se ejecutan al iniciar este módulo.
* **declarations**: Todos los componentes que forman parte del módulo.

Todas las clases de los componentes, para que se puedan usar en otros componentes o en otros lugares de la aplicación hay que exportar esa clase con la palabra reservada **`export`**.

Antes de usar cada uno de los componentes y agregarlo al apartado **declarations**, hay que importar el fichero del lugar en el que esté.

````javascript
import {HolaMundoComponent} from '../components/hola-mundo.component';
````

## Referencias oficiales y enlaces

Profesor: **`ricardo.jaume@pue.es`**

* Documentación oficial de Angular en https://angular.io/
* Documentación oficial de Typescript en http://www.typescriptlang.org/