const store = require('./app/store');

const { counterActions } = require('./features/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounterSlice');
const { fetchPosts } = require('./features/postSlice');

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(fetchPosts());
