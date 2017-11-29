import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Angular Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { FotosService } from './fotos.service';

import { AppComponent } from './app.component';
import { GridMaterialComponent } from './grid-material/grid-material.component';
import { FotoDetailComponent } from './foto-detail/foto-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    GridMaterialComponent,
    FotoDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: 'list-fotos', component: GridMaterialComponent },
      { path: 'fotos/:id', component: FotoDetailComponent },
      { path: '', redirectTo: 'list-fotos', pathMatch: 'full' },
      { path: '**', redirectTo: 'list-fotos', pathMatch: 'full' }
    ])
  ],
  entryComponents: [
    FotoDetailComponent
  ],
  providers: [FotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
