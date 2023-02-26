import { TOGGLE_PAGES } from './actionTypes';

export const toggledPages = (value) => {
	return {
		type: TOGGLE_PAGES,
		payload: value
	};
};
