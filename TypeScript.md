# TypeScript

Los navegadores no soportan directamente TypeScript, por lo que hay que **"transpilar"**. Es un proyecto open source, mantenido por Microsoft.

## Instalación

Instalamos globalmente con npm
````
npm install -g typescript
````

Y para compilar:
```
tsc helloworld.ts
```

A la hora de crear un proyecto hay que configurar a que versión de javascript va a transpilar.

## Variables y tipos de variables

### Declaración de variables

**var**, **let** y **const** para declarar variables, aunque se recomienda no usar var por buenas prácticas.

#### Diferencias entre var y let

**var** declara **variables globales** y **let** es una variable de **ámbito de bloque**, es decir, sólo es visible en el ámbito del bloque en la que se ha definido.

### Estructuras básicas

* **enums**: Una colección de constantes fija.
* **arrays**: 
* **tuples**: Agrupación que defines los tipos de datos que van a ir dentro.

### Tipos de variables

Boolean
Number
String
Array
Enum
Any
Void

#### Inferencia de tipos

En una variable que no se le ha asignado el tipo de variable se le asigna un valor, TypeScript infiere el tipo de la variable

let myString = 'this is a string'