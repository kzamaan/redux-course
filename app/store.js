const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const counterReducer = require('./../features/counterSlice');
const dynamicCounterReducer = require('./../features/dynamicCounterSlice');

const logger = createLogger();

const store = configureStore({
	reducer: {
		counter: counterReducer,
		dynamicCounter: dynamicCounterReducer
	},
	middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
});

module.exports = store;
