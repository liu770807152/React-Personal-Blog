import {createStore} from 'redux';
import reducer from './reducer';
// import redux dev tool for debugging
import { composeWithDevTools } from 'redux-devtools-extension';

let store = createStore(reducer,composeWithDevTools());
export default store;