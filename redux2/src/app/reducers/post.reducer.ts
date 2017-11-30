import * as PostActions from '../actions/post.actions';
import { Post } from '../models/post.model';

export type Action = PostActions.All;

// Definimos el estado inicial del Post
const defaultState: Post = {
    text: 'Post inicial',
    likes: 0
};

// Función que provoca el cambio de estado
const newState = function(state, newData) {
    // Orden de asignación de assing es de derecha a izquierda. Uno sobreescribe al otro
    return Object.assign({}, state, newData);
};

export function postReducer(state: Post = defaultState, action: Action) {
    switch (action.type) {
        case PostActions.EDIT_TEXT:
            return newState(state, {text: action.payload});
        case PostActions.UPVOTE:
            return newState(state, { likes: ++state.likes });
        case PostActions.DOWNVOTE:
            return newState(state, { likes: --state.likes });
        case PostActions.RESET:
            return defaultState;
        default:
    }
}

