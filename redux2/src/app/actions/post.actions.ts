import { Action } from '@ngrx/store';

export const EDIT_TEXT = '[Post] Edit';
export const UPVOTE = '[Post] UpVote';
export const DOWNVOTE = '[Post] DownVote';
export const RESET = '[Post] Reset';

export class EditText implements Action {
    readonly type: string = EDIT_TEXT;
    constructor(public payload: string) {}
}
export class UpVote implements Action {
    readonly type: string = UPVOTE;
    constructor(public payload: string) {}
}
export class DownVote implements Action {
    readonly type: string = DOWNVOTE;
    constructor(public payload: string) {}
}
export class Reset implements Action {
    readonly type: string = RESET;
    constructor(public payload: string) {}
}

export type All = EditText | UpVote | DownVote | Reset;

