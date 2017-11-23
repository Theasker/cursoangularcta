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
  private _alumnosOrdenados: IAlumno[];
  private _subscription: any;
  private _listFilter: string;

  constructor(
    private _alumnoService: AlumnoService,
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
  }

  // Filtrado en el array del texto por el que queremos filtrar en la caja de texto
  performFilter(filterBy: string): IAlumno[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this._alumnos.filter((product: IAlumno): boolean => {
      return product.name.toLocaleLowerCase().indexOf(filterBy) !== -1;
    });
  }

  orderByAverage(): IAlumno[] {
    /*
    var items = [
      { name: 'Edward', value: 21 },
      { name: 'Sharpe', value: 37 },
      { name: 'And', value: 45 },
      { name: 'The', value: -12 },
      { name: 'Magnetic' },
      { name: 'Zeros', value: 37 }
    ];
    items.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    */
    /*
    let average: number = 0;
    average = numbers.reduce( (valorAnterior, valorActual, indice, vector) => {
      return valorAnterior + valorActual;
    },0)
    average = average / numbers.length;
    return null;
    */
    this._alumnos;
    return null;
  }

  ngOnInit() {
    this._subscription = this._alumnoService.getAlumnos().subscribe(
      (alumnos) => {
        this._alumnos = alumnos;
        this._alumnosFiltrados = alumnos;
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
    const alumno: IAlumno = {
      id: 7,
      dni: 'xxx',
      name: 'xxxnombre',
      surname: 'xxxapellido',
      curse: '2 C',
      avatar: 'http://placehold.it/32x32',
      notes: [1, 3, 4]
    };

    this._alumnoService.setAlumno(alumno).subscribe(
      result => {
        if (result) {
          
        }
      }
    );
  }

}
