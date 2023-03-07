const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');

// initial state
const initialState = {
	loading: false,
	video: {},
	error: ''
};

// thunk function
const fetchVideos = createAsyncThunk('video/fetchVideos', async (_, { dispatch }) => {
	const response = await fetch('http://localhost:9000/videos');
	const video = await response.json();
	return video;
});

// create video slice
const videosSlice = createSlice({
	name: 'video',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state, action) => {
				state.loading = true;
				state.error = '';
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.loading = false;
				state.video = action.payload;
				state.error = '';
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error;
				state.video = {};
			});
	}
});

// export the reducer and the thunk function
module.exports = videosSlice.reducer;
module.exports.fetchVideos = fetchVideos;
