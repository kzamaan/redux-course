const fetch = require('node-fetch');

const fetchTodos = async (dispatch, getState) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
	const todos = await response.json();

	dispatch({
		type: 'todo/loaded',
		payload: todos
	});

	console.log(`Number of todos: ${getState().todos.length}`);
};

module.exports = {
	fetchTodos
};
