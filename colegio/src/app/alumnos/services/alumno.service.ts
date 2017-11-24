import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import { IAlumno } from '../interfaces/alumno.interface';


@Injectable()
export class AlumnoService {
  // Declaración de una constante de clase
  // static readonly APIURL: string = 'http://localhost:3000/alumns?_page=1';
  static readonly APIURL: string = 'http://localhost:3000/alumns';
  alumnos: IAlumno[];
  private subject: Subject<IAlumno[]> = new Subject<IAlumno[]>();

  constructor(
    private _http: HttpClient
  ) {
    this._http.get<IAlumno[]>(AlumnoService.APIURL).subscribe(
      (data) => {
        this.alumnos = data;
        this.subject.next(this.alumnos);
        localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
      }
    );
  }

  getAlumnos(): Observable<IAlumno[]> {
    this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    // Inicializamos el array de Subject para que nos observe los posibles cambios
    // Hace un evento push cuando hay una modificación cuando hacemos next.
    return this.subject.asObservable();
    // return Observable.of(this.alumnos);
  }

  setAlumno(al: IAlumno): Observable<boolean> {
    try {
      // 1. Recuperar los alumnos dados de alta anteriormente
      // Si no existe le pasamos un array vacío
      this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
      // 2. Añadir a esa colección el nuevo alumno
      this.alumnos.push(al);
      // 3. Persistir la colección modificada
      localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
      // Avisamos que hay un cambio para que el componente reaccione al cambio.
      this.subject.next(this.alumnos);
      return Observable.of(true);
    }catch (ex) {
      return Observable.of(false);
    }
  }

  updateAlumno(al: IAlumno): Observable<boolean> {
    // 1. Recuperar los alimnos dados de alta anteriormente
    this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    // 2. Busco el alumno a modificar
    const alumno = this.alumnos.find(
      (alum) => {
        return alum.dni === al.dni;
      }
    );
    if (alumno !== null) {
      const index = this.alumnos.indexOf(alumno);
      this.alumnos[index] = al;

      // Avisamos que hay un cambio para que el componente reaccione al cambio.
      this.subject.next(this.alumnos);

      // 3. Persistir la colección modificada
      localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
    }
    return Observable.of(true);
  }

  removeAlumno(dni: string): Observable<boolean> {
    // 1. Recuperar los alimnos dados de alta anteriormente
    this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    // 2. Busco el alumno a eliminar
    const alumno = this.alumnos.find(
      (alum) => {
        return alum.dni === dni;
      }
    );
    if (alumno !== null) {
      const index = this.alumnos.indexOf(alumno);
      this.alumnos.splice(index, 1);

      // Avisamos del cambio para que refresque sólo elemento ese elmento en la vista.
      this.subject.next(this.alumnos);

      // 3. Persistir la colección modificada
      localStorage.setItem('alumnos', JSON.stringify(this.alumnos));

    }
    return Observable.of(true);
  }
}
