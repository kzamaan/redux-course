import initialState from './initialState';
import { ADDED } from './actionTypes';

function nextTodoId(products) {
	const maxId = products.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDED:
			return [
				...state,
				{
					id: nextTodoId(state),
					...action.payload
				}
			];
		default:
			return state;
	}
};

export default reducer;
