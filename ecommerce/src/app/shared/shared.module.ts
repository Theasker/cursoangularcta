import { NgModule } from '@angular/core';
// Módulo que hay que cargar para este segundo módulo
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StarComponent } from './star.component';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      StarComponent,
      CommonModule,
      FormsModule
  ]
})
export class SharedModule { }
