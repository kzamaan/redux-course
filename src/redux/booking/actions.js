import { ADD_BOOKING, REMOVE_BOOKING } from './actionTypes';

export const addBooking = (value) => ({ type: ADD_BOOKING, payload: value });

export const removeBooking = (value) => {
	return {
		type: REMOVE_BOOKING,
		payload: value,
	};
};
