const store = require('./app/store');

const { fetchVideos } = require('./features/videos/videoSlice');
const { fetchRelatedVideos } = require('./features/videos/relatedVideoSlice');

// dispatch the thunk function to fetch the videos and related videos
store.dispatch(fetchVideos()).then((response) => {
	if (response.meta.requestStatus === 'fulfilled') {
		store.dispatch(fetchRelatedVideos(response.payload.tags));
	}
});
