// Función que recibe acciónes
import { Action } from '@ngrx/store';

export function saludoReducer(state: string = 'Hola', action: Action) {
    /*
     La variable 'message' es nuestro modelo
     que se modifican con las funciones saludarCastellano() y saludarInges()
    */

    // Lanzamiento de las acciones que cambian el estado
    switch (action.type) {
        case 'SPANISH':
            return state = 'Hola Redux !!';
        case 'ENGLISH':
            return state = 'Hello Redux !!';
        default:
            return state;
    }
}
