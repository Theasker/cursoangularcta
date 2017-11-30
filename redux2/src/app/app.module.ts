import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Redux
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { saludoReducer } from './saludo.reducer';
import { postReducer } from './reducers/post.reducer';

// Número de estados que puede guardar la herramienta de debug
// StoreDevtoolsModule.instrument({maxAge: 10})
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      message: saludoReducer,
      post: postReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 10})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
