import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';
import { AlumnoService } from './services/alumno.service';

@NgModule({
  declarations: [
    AlumnoListComponent,
    AlumnoDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'alumnos', component: AlumnoListComponent },
      { path: 'alumnos/:id', component: AlumnoListComponent }
    ])
  ],
  providers: [AlumnoService],
  bootstrap: [],
  exports: [
    AlumnoListComponent,
    AlumnoDetailComponent
  ]
})
export class AlumnoModule { }
