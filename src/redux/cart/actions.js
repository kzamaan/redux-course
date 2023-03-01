import { ADD_TO_CART, INCREMENT_QTY, DECREMENT_QTY, REMOVE } from './actionTypes';

export const addToCart = (value) => {
	return {
		type: ADD_TO_CART,
		payload: value
	};
};
export const increment = (value) => {
	return {
		type: INCREMENT_QTY,
		payload: value
	};
};
export const decrement = (value) => {
	return {
		type: DECREMENT_QTY,
		payload: value
	};
};
export const removeCartItem = (value) => {
	return {
		type: REMOVE,
		payload: value
	};
};
