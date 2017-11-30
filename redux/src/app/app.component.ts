import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

// Interface que representa el estado de la aplicación
interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message: Observable<string>;

  constructor(
    // Gestiona el modelo de datos
    private store: Store<AppState>
  ) {
    // Escuchamos el cambio de estado
    // Select vincula el cambio en el almacén (store) con la variable message
    this.message = this.store.select('message');
  }

  saludarCastellano() {
    // necesito una variable de tipo store
    this.store.dispatch({type: 'SPANISH'});
  }

  saludarIngles() {
    this.store.dispatch({type: 'ENGLISH'});
  }
}
