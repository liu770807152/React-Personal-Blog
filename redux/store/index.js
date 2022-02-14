import {createStore} from 'redux';
import allReducers from './reducer';
// import redux dev tool for debugging
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(allReducers, composeWithDevTools());
export default store;