import { combineReducers } from 'redux';
import configReducer from './config/reducer';
import productReducer from './product/reducer';

const rootReducer = combineReducers({
	config: configReducer,
	products: productReducer
});

export default rootReducer;
