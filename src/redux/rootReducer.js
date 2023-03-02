import { combineReducers } from 'redux';
import booksReducer from './books/reducer';

// create root reducer
const rootReducer = combineReducers({
	books: booksReducer
});

export default rootReducer;
