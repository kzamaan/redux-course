import { loaded } from '../todos/actions';

const fetchTodos = async (dispatch, getState) => {
	const response = await fetch('http://localhost:9000/todos');
	const todos = await response.json();

	dispatch(loaded(todos));

	console.log(`Number of todos: ${getState().todos.length}`);
};

export default fetchTodos;
