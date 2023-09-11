import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers/index'
//import {reduxImmutableStateInvariant} from 'redux-immutable-state-invariant'

export default function configureStore(initialState){
   // const composeEnhancers=window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose
    return createStore(rootReducer,
         initialState,
         applyMiddleware()
        )
}