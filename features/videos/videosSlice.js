const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');

// initial state
const initialState = {
	loading: false,
	videos: {},
	error: ''
};

const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
	const response = await fetch('http://localhost:9000/videos');
	const videos = await response.json();
	return videos;
});

const videosSlice = createSlice({
	name: 'videos',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchVideos.pending, (state, action) => {
			state.loading = true;
			state.error = '';
		});

		builder.addCase(fetchVideos.fulfilled, (state, action) => {
			state.loading = false;
			state.posts = action.payload;
			state.error = '';
		});

		builder.addCase(fetchVideos.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error;
		});
	}
});

module.exports = videosSlice.reducer;
module.exports.fetchVideos = fetchVideos;
