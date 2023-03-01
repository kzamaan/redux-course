import { deleted } from '../todos/actions';

const deleteTodo = (todoId) => {
	return async (dispatch) => {
		await fetch(`http://localhost:9000/todos/${todoId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json; charset=UTF-8'
			}
		});

		dispatch(deleted(todoId));
	};
};

export default deleteTodo;
