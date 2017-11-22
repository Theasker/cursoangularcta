# Aplicación colegio

## Enunciado

Un profesor quiere poder ver un listado de sus alumnos ordenado por nota media. En este listado aparecerá la imagen del alumno, su nombre y apellido. Desde el listado debe poder acceder al detalle del alumno pulsando sobre el apellido del alumno.

También deberá aparecer un buscador sobre el listado que le permita poder buscar a un alumno por identificador (dni) y que el resultado de la búsqueda le lleve directamente al detalle del alumno. El buscador no debe desaparecer al aparecer el detalle tras la búsqueda.

En el detalle deberán aparecer avatar, nombre, apellido y un listado de sus calificaciones.

Desde esta vista deberemos poder volver al listado.

Requerimientos:
* El app debe realizarse con angular-cli
* Debe seguir las buenas prácticas de angular: datos remotos, asíncrono, servicios…
* Opcional: Usar bootstrap (recomendable)

**Alumno** será un tipo formado por las propiedades **nombre**, **apellido**, **dni**, **curso** y **notas** (colección de números) y opcionalmente su **avatar**(ruta de imagen). También tendrá un **método obtenerNotaMedia** (deberá hacer la media de todas las notas de alumno)

## Proceso de creación

### Creación del proyecto

Creación del proyecto

    ng new school

Instalamos bootstrap y lo agregamos al fichero `.angular-cli.json` para que angular lo reconozca.

    npm install bootstrap@3

````json
...
"styles": [
    "styles.css",
    "../node_modules/bootstrap/dist/css/boostrap.min.css"
],
...
````

### Creación del varios módulos y componentes básicos

Creación de los módulos `alums-list.component` y `alums-detail.component`
````bash
ng g c alumns/alumns-list
ng g c alumns/alumns-detail
````

### Modularizando la aplicación

Para modularizar la aplicación y tener separado las diferentes partes de la aplicación por módulos, vamos a separar lo que es la lógica que tiene que ver con la administración de alumnos en un módulo diferente.

## Crear un API REST desde un fichero JSON

Instalamos `json-server`
````bash
npm install json-server --save-dev
````

Luego con ejecuto el comando que me crea el servidor API REST
````bash
$ ./node_modules/.bin/json-server --watch ./src/api/apiAlumnos.object.json

  \{^_^}/ hi!

  Loading ./src/api/apiAlumnos.object.json
  Done

  Resources
  http://localhost:3000/alumns

  Home
  http://localhost:3000

  Type s + enter at any time to create a snapshot of the database
  Watching...

http://localhost:3000/alumnsGET /alumns 200 35.612 ms - -
GET /alumns 200 28.560 ms - -
````