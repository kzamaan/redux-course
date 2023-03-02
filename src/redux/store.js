import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thankMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

// create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thankMiddleware)));

export default store;
