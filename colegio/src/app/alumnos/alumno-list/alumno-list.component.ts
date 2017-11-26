import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

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
  private _alumnosFiltradosOrdenados: IAlumno[];
  private _subscription: any;
  private _listFilter: string;
  private _tipoForm: string; // Variable para el tipo de formulario (alta o edición)

  constructor(
    private _alumnoService: AlumnoService,
    private _router: Router
  ) { }

  public get listFilter(): string{
    // proceso de control antes de la devolución
    return this._listFilter;
  }

  public set listFilter(value: string) {
    // proceso antes de asignación
    this._listFilter = value;
    // Comprobamos que hay algo escrito en la caja de busqueda
    // para aplicar el filtro o no aplicarlo y mostrar todos los productos
    this._alumnosFiltrados = this.listFilter ? this.performFilter(this._listFilter) : this._alumnos;
    this._alumnosFiltrados = this.orderByAverage(this._alumnosFiltrados);
    console.log('this._alumnosFiltrados: ', this._alumnosFiltrados);
  }

  // Filtrado en el array del texto por el que queremos filtrar en la caja de texto
  performFilter(filterBy: string): IAlumno[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this._alumnos.filter((product: IAlumno): boolean => {
      return product.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  orderByAverage(alumnos: IAlumno[]): IAlumno[] {
     alumnos.sort(
      (a: IAlumno, b: IAlumno) => {
        // Calculamos la media de el objeto actual y el aterior (a, b)
        let averageA: number;
        let averageB: number;
        averageA = a.notes.reduce( (valorAnterior, valorActual, indice, vector) => {
          return valorAnterior + valorActual;
        }, 0);
        averageA = averageA / a.notes.length;
        averageB = b.notes.reduce( (valorAnterior, valorActual, indice, vector) => {
          return valorAnterior + valorActual;
        }, 0);
        averageB = averageB / b.notes.length;

        // Hacemos la comparación para ordenar
        if (averageA > averageB) { return 1; }
        if (averageA < averageB) { return -1; }
        return 0;
      }
    );
    return alumnos;
  }

  ngOnInit() {
    this._subscription = this._alumnoService.getAlumnos().subscribe(
      (alumnos) => {
        this._alumnos = alumnos;
        this._alumnosFiltrados = this.orderByAverage(alumnos);
      }, (error) => {
        console.log('Error al recuperar los datos: ', error);
      }
    );
  }

  ngOnChanges() {

  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onClick(alumno: IAlumno): void {
    this._alumno = alumno;
  }

  nuevoAlumno() {
    this._router.navigate(['/formulario']);
  }

  borrarAlumno(dni: string) {
    this._alumnoService.removeAlumno(dni).subscribe(
      result => {
        console.log('result: ', 'Operación de borrado de alumno correcta');
      }
    );
  }

  editarAlumno(alumno: IAlumno) {
    console.log('alumno: ', alumno);
    this._router.navigate(['/formulario', alumno]);
  }
}
