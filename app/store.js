const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const videosReducer = require('./../features/videos/videosSlice');

const logger = createLogger();

const store = configureStore({
	reducer: {
		videos: videosReducer
	},
	middleware: (defaultMiddleware) => defaultMiddleware().concat(logger)
});

module.exports = store;
