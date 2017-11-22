import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';
import { AlumnoService } from './services/alumno.service';

@NgModule({
  declarations: [
    AlumnoListComponent,
    AlumnoDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [AlumnoService],
  bootstrap: [],
  exports: [
    AlumnoListComponent,
    AlumnoDetailComponent
  ]
})
export class AlumnoModule { }
