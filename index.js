const store = require('./app/store');

const { counterActions } = require('./features/counterSlice');
const { dynamicCounterActions } = require('./features/dynamicCounterSlice');

store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(counterActions.increment());
store.dispatch(counterActions.increment());
store.dispatch(counterActions.decrement());

store.dispatch(dynamicCounterActions.increment(3));
store.dispatch(dynamicCounterActions.decrement(1));
