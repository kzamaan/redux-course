import initialState from './initialState';
import { TOGGLE_PAGES } from './actionTypes';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_PAGES:
			return {
				...state,
				currentPage: action.payload
			};
		default:
			return state;
	}
};

export default reducer;
