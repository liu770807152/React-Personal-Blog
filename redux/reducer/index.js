/**
 * This file is for collecting all reducers
 */
import { combineReducers } from 'redux';
import userReducer from './user';
import blogReducer from './blog';

export default combineReducers({
	userReducer,
	blogReducer
});

