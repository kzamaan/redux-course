import { initialState } from './initialState';
import { ADDED, EDIT, LOADED, UPDATED, DELETED, SEARCHING, FILTERING } from './actionTypes';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADED:
			return {
				...state,
				list: action.payload
			};

		case ADDED:
			return {
				...state,
				list: [...state.list, action.payload]
			};

		case EDIT:
			return {
				...state,
				editableBook: action.payload
			};

		case UPDATED:
			return {
				...state,
				list: state.list.map((book) => {
					if (book.id !== action.payload.id) {
						return book;
					}
					return { ...action.payload };
				})
			};

		case DELETED:
			return {
				...state,
				list: state.list.filter((book) => book.id !== action.payload)
			};

		case SEARCHING:
			return {
				...state,
				searchKey: action.payload
			};

		case FILTERING:
			return {
				...state,
				category: action.payload
			};

		default:
			return state;
	}
};

export default reducer;
