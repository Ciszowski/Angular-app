import { Action } from '@ngrx/store';

export enum CounterActionsType {
    Increment= "[counter] Increment",
    Decrement= "[counter] Decrement"
}

export class IncrementCounter implements Action{
    type = CounterActionsType.Increment

    constructor(public payload: number){}
}
export class DecrementCounter implements Action {
    type = CounterActionsType.Decrement

    constructor(public payload: number){}
}
export type CounterActions = IncrementCounter | DecrementCounter //limiter les actions via ceci (pipe => | )