import { combineReducers } from 'redux';
import configReducer from './config/reducer';
import productReducer from './product/reducer';
import cartReducer from './cart/reducer';

const rootReducer = combineReducers({
	config: configReducer,
	products: productReducer,
	cart: cartReducer
});

export default rootReducer;
