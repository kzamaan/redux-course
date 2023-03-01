import { initialState } from './initialState';
import { ADDED, ALL_COMPLETED, CLEAR_COMPLETED, COLOR_SELECTED, DELETED, LOADED, TOGGLED } from './actionTypes';

function nextTodoId(todos) {
	const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOADED:
			return action.payload;
		case ADDED:
			return [
				...state,
				{
					id: nextTodoId(state),
					text: action.payload,
					completed: false
				}
			];

		case TOGGLED:
			return state.map((todo) => {
				if (todo.id !== action.payload) {
					return todo;
				} else {
					return {
						...todo,
						completed: !todo.completed
					};
				}
			});

		case COLOR_SELECTED:
			const { todoId, color } = action.payload;
			return state.map((todo) => {
				if (todo.id !== todoId) {
					return todo;
				} else {
					return {
						...todo,
						color: color
					};
				}
			});

		case DELETED:
			return state.filter((todo) => todo.id !== action.payload);

		case ALL_COMPLETED:
			return state.map((todo) => {
				return {
					...todo,
					completed: true
				};
			});

		case CLEAR_COMPLETED:
			return state.filter((todo) => !todo.completed);

		default:
			return state;
	}
};

export default reducer;
