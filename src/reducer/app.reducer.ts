import { State } from './app.state';
import { Detail } from '../app/template/detail.modele';
import { CounterActionsType, CounterActions } from './app.action';


const initialState: State = {
    count : 0,
    title : "Compteur",
    details: []
}

export function reducer(state = initialState, action: CounterActions){
    console.log("in reducer", action)
    switch(action.type){
        case CounterActionsType.Increment:
            return{
                ...state,
                count: state.count + action.payload,
                details: [...state.details, <Detail>{date: new Date(), buttonClicked : "ajout"}]
            }
        case CounterActionsType.Decrement:
            return {
                ...state,
                count: state.count - action.payload,
                details: [...state.details, <Detail>{date: new Date(), buttonClicked : "retrait"}]
            }
        default:
            return state;
    }
}