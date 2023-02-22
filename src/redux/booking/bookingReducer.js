import { ADD_BOOKING, REMOVE_BOOKING } from './actionTypes';

const initialState = [];

const bookingReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOOKING:
			return [
				...state,
				{
					id: state.length + 1,
					...action.payload,
				},
			];

		case REMOVE_BOOKING:
			return state.filter((booking) => booking.id !== action.payload);

		default:
			return state;
	}
};

export default bookingReducer;
