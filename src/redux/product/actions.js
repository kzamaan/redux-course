import { ADDED, ADJUST_STOCK } from './actionTypes';

export const added = (value) => {
	return {
		type: ADDED,
		payload: value
	};
};

export const adjustStock = (value) => {
	return {
		type: ADJUST_STOCK,
		payload: value
	};
};
