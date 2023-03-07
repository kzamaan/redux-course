const store = require('./app/store');

const { fetchVideos } = require('./features/videos/videoSlice');
const { fetchRelatedVideos } = require('./features/videos/relatedVideoSlice');

// dispatch the thunk function to fetch the videos and related videos
store.dispatch(fetchVideos()).then(() => {
	const state = store.getState();
	const tags = state.video?.video?.tags;
	if (tags) store.dispatch(fetchRelatedVideos(tags));
});
