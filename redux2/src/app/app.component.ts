import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { EDIT_TEXT, UPVOTE, DOWNVOTE, RESET } from './actions/post.actions'
import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';

// Interface que representa el estado de la aplicación
interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message: Observable<string>;
  post: Observable<Post>;
  text: string;

  constructor(
    // Gestiona el modelo de datos
    private store: Store<AppState>
  ) {
    // Escuchamos el cambio de estado. Nos suscribimos a cada uno de los modelos del store
    // Select vincula el cambio en el almacén (store) con la variable message
    // Definido en StoreModule.forRoot del app.module.ts
    this.message = this.store.select('message');
    this.post = this.store.select('post');
  }

  saludarCastellano() {
    // necesito una variable de tipo store
    // Generamos los eventos
    this.store.dispatch({type: 'SPANISH'});
  }

  saludarIngles() {
    this.store.dispatch({type: 'ENGLISH'});
  }

  like() {
    this.store.dispatch({type: UPVOTE});
  }

  unlike() {
    this.store.dispatch({type: DOWNVOTE});
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  reset() {
    this.store.dispatch({type: RESET});
  }
}
