import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Alumno } from '../../../models/alumno.model';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecondComponentComponent implements OnInit {
  private _alumno: Alumno;
  private _nombre: string;
  private _resultado: number;
  private _alumnos: Array<Alumno>;
  private _verListado: boolean = false;
  private _nombreUsuario: string;
  
  constructor() {
    this._nombre = 'Mauri';
    this._alumno = new Alumno("Mauri",18,"Angular");
    this._alumnos = [
      new Alumno("Mauri",18,"Angular"), 
      new Alumno("Mauri2",19,"Angular2"),
      new Alumno("Mauri3",20,"Angular3"),
      new Alumno("Mauri4",21,"Angular4"),
    ]
  }

  ngOnInit() {
    console.log('Se ha iniciado el componente second-component');
  }

  private verResultado(): void{
    this._resultado = 10;
    this._verListado = !this._verListado;
  }

  private verDatosAlumno(): string{
    let datos: string;
    datos = `El nombre del alumno de nombre ${this._alumno.nombre} 
      de edad ${this._alumno.edad} en el curso ${this._alumno.curso}.`;
    return datos;
  }

}

