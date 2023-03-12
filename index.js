const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const { fetchTodos } = require('./functions');

const { actionDelayMiddleware, fetchAsyncMiddleware } = require('./middleware');

const initialState = {
	todos: []
};

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'todo/added':
			return {
				...state,
				todos: [
					...state.todos,
					{
						title: action.payload
					}
				]
			};
		case 'todo/loaded':
			return {
				...state,
				todos: [...state.todos, ...action.payload]
			};
		default:
			return state;
	}
};

const store = createStore(todoReducer, applyMiddleware(thunk.default, actionDelayMiddleware));

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch({
	type: 'todo/added',
	payload: true
});

store.dispatch(fetchTodos);
