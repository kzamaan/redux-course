const actionDelayMiddleware = (store) => (next) => (action) => {
	if (action.type === 'todo/added') {
		console.log('I am delaying you');
		return;
	}
	return next(action);
};

const fetchAsyncMiddleware = (store) => (next) => async (action) => {
	if (typeof action === 'function') {
		return action(store.dispatch, store.getState);
	}
	return next(action);
};

module.exports = {
	actionDelayMiddleware,
	fetchAsyncMiddleware
};
