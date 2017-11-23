import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { IAlumno } from '../interfaces/alumno.interface';

import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.css']
})
export class AlumnoListComponent implements OnInit, OnDestroy, OnChanges {
  private _alumno: IAlumno;
  private _alumnos: IAlumno[];
  private _alumnosFiltrados: IAlumno[];
  private _subscription: any;
  private _listFilter: string;

  constructor(
    private _alumnoService: AlumnoService,
  ) { }

  public get listFilter(): string{
    // proceso de control antes de la devolución
    return this._listFilter;
  }

  ngOnInit() {
    this._subscription = this._alumnoService.getAlumnos().subscribe(
      (alumnos) => {
        this._alumnos = alumnos;
        this._alumnosFiltrados = alumnos;
        console.log('this._alumnosFiltrados: ', this._alumnosFiltrados);
      }, (error) => {
        console.log('Error al recuperar los datos: ', error);
      }
    );
  }

  ngOnChanges() {
    console.log(this._listFilter);
  }

  ngOnDestroy(): void {

  }

  onClick(alumno: IAlumno): void {
    this._alumno = alumno;
  }

  nuevoAlumno() {

    const alumno: IAlumno = {
      id: 7,
      dni: 'xxx',
      nombre: 'xxxnombre',
      apellidos: 'xxxapellido',
      curso: '2 C',
      avatar: 'http://placehold.it/32x32',
      notas: [1, 3, 4]
    };

    this._alumnoService.setAlumno(alumno).subscribe(
      result => {
        if (result) {
          
        }
      }
    );
  }

}
