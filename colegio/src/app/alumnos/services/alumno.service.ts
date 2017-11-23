import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { IAlumno } from '../interfaces/alumno.interface';


@Injectable()
export class AlumnoService {
  // Declaración de una constante de clase
  static readonly APIURL: string = 'http://localhost:3000/alumns';
  alumnos: IAlumno[];

  constructor(
    private _http: HttpClient
  ) {
    this._http.get<IAlumno[]>(AlumnoService.APIURL).subscribe(
      (data) => {
        this.alumnos = data;
        localStorage.setItem('alumnos', JSON.stringify(this.alumnos));
      }
    );
  }

  getAlumnos(): Observable<IAlumno[]> {
    this.alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    return Observable.of(this.alumnos);
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
      // 3. Persistir la colección modificada
      localStorage.setItem('alumnos',JSON.stringify(this.alumnos));
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
      this.alumnos.slice(index, 1);
      // 3. Persistir la colección modificada
      localStorage.setItem('alumnos',JSON.stringify(this.alumnos));
    }
    return Observable.of(true);
  }
}
