import { Component, OnInit, Input } from '@angular/core';
import { IAlumno } from '../interfaces/alumno.interface';
import { AlumnoService } from '../services/alumno.service';

@Component({
  selector: 'app-alumno-add-edit',
  templateUrl: './alumno-add-edit.component.html',
  styleUrls: ['./alumno-add-edit.component.css']
})

export class AlumnoAddEditComponent implements OnInit {
  constructor(
    private _alumnoService: AlumnoService
  ) {
  }

  ngOnInit() {
  }

  enviarDatos(data) {
    const alumno = {
      id: 0,
      dni: data.dni,
      name: data.name,
      surname: data.surname,
      curse: data.curse,
      avatar: '',
      notes: []
    };
    this.nuevoAlumno(alumno);
  }

  nuevoAlumno(alumno: IAlumno) {
    this._alumnoService.setAlumno(alumno).subscribe(
      (result) => {
        if (result) {
          console.log('result: ', 'Alumno agregado correctamente');
        }else {
          console.log('result: ', 'No se ha podido agregar el alumno');
        }
      },
      (error) => {
        console.log('error: ', 'Error al agregar el alumno: ', error);
      }
    );
  } 

}
