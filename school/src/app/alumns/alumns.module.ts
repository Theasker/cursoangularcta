import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlumnsListComponent } from './alumns-list/alumns-list.component';
import { AlumnsDetailComponent } from './alumns-detail/alumns-detail.component';
import { AlumnService } from './service/alumn.service';

@NgModule({
  declarations: [
    AlumnsListComponent,
    AlumnsDetailComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [AlumnService],
  bootstrap: [],
  exports: [
      AlumnsListComponent,
      AlumnsDetailComponent
  ]
})
export class AlumnModule { }
