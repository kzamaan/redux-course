const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');

// initial state
const initialState = {
	loading: false,
	videos: [],
	error: ''
};

// thunk function
const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async (searchTerm) => {
	const tags = searchTerm.join('&tags_like=');
	const response = await fetch(`http://localhost:9000/videos?tags_like=${tags}`);
	const relatedVideo = await response.json();

	// sort the videos by views
	return relatedVideo;
});

// create related videos slice
const relatedVideosSlice = createSlice({
	name: 'relatedVideos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatedVideos.pending, (state, action) => {
				state.loading = true;
				state.error = '';
			})
			.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
				state.loading = false;
				state.videos = action.payload;
				state.error = '';
			})
			.addCase(fetchRelatedVideos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
			});
	}
});

// export the reducer and the thunk function
module.exports = relatedVideosSlice.reducer;
module.exports.fetchRelatedVideos = fetchRelatedVideos;
