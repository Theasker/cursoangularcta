import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Redux
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { saludoReducer } from './saludo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      message: saludoReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
