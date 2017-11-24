import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AlumnoListComponent } from './alumno-list/alumno-list.component';
import { AlumnoDetailComponent } from './alumno-detail/alumno-detail.component';
import { AlumnoService } from './services/alumno.service';
import { AveragePipe } from '../shared/pipes/average.pipe';
import { AlumnoAddEditComponent } from './alumno-add-edit/alumno-add-edit.component';

@NgModule({
  declarations: [
    AlumnoListComponent,
    AlumnoDetailComponent,
    AveragePipe,
    AlumnoAddEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'alumnos', component: AlumnoListComponent },
      { path: 'alumnos/:id', component: AlumnoListComponent },
      { path: 'formulario', component: AlumnoAddEditComponent },
      { path: 'formulario/:alumno', component: AlumnoAddEditComponent }
    ])
  ],
  providers: [AlumnoService],
  bootstrap: [],
  exports: [
    AlumnoListComponent,
    AlumnoDetailComponent,
    AlumnoAddEditComponent
  ]
})
export class AlumnoModule { }
