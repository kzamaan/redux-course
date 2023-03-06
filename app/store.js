const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const counterReducer = require('./../features/counterSlice');
const dynamicCounterReducer = require('./../features/dynamicCounterSlice');
const postReducer = require('./../features/postSlice');

const logger = createLogger();

const store = configureStore({
	reducer: {
		counter: counterReducer,
		dynamicCounter: dynamicCounterReducer,
		post: postReducer
	},
	middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
});

module.exports = store;
