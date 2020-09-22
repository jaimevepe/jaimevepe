import * as redux from 'redux';
import { ADD_ITEM,
        DELETE_ITEM,
        TOGGLE_COMPLETE } from "../actions";
import initialState from './initialState';

import {devToolsEnhancer} from 'redux-devtools-extension'; //allows to connect to chrome dev tools, redux extension

const todosReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM : 
        return {
            ...state,
            todos: [
                ...state.todos,
                {
                    id: Date.now(),
                    text: action.text,
                    isComplete: false
                }
            ]
        }
        case DELETE_ITEM :
          return {
            ...state,
            todos: state.todos.filter(t => t.id !== action.id)
          }
        case TOGGLE_COMPLETE :
            return {
            ...state,
            todos: state.todos.map(
                t => action.id === t.id ? {...t, isComplete: !t.isComplete} : t
            )
            }
        default:
            return state
    }
}

const store = redux.createStore(
    todosReducer,
    devToolsEnhancer()
    )

export default store;