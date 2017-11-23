import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { AlumnoService } from '../services/alumno.service';
import { IAlumno } from '../interfaces/alumno.interface';

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.css']
})
export class AlumnoDetailComponent implements OnInit {
  @Input() alumno: IAlumno;
  private _id: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _alumnoService: AlumnoService,
  ) { }

  ngOnInit() {
    // Obtenemos el parámetro
    this._route.params.subscribe(
      (data) => {
        this._id = Number(data.id);
        console.log('data: ', data);
      }, (error) => {
        console.log('error: ', error);
      }
    );
  }

  alumnoClicked(data: IAlumno) {
    console.log('data: ', data);
  }
}
