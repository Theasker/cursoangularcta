import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Angular Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import { FotosService } from './fotos.service';

import { AppComponent } from './app.component';
import { GridMaterialComponent } from './grid-material/grid-material.component';


@NgModule({
  declarations: [
    AppComponent,
    GridMaterialComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [FotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
