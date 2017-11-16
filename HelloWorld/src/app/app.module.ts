import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HolaMundoComponent} from '../components/hola-mundo.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
