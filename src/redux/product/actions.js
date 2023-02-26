import { ADDED } from './actionTypes';

export const added = (value) => {
	return {
		type: ADDED,
		payload: value
	};
};
