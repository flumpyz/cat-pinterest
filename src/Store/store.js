import {createStore} from 'redux';
import {catsReducer} from "../Reducers/catsReducer";

export const store = createStore(catsReducer);