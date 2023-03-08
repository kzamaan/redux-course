import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';
// initial state
const initialState = {
	isLoading: false,
	videos: [],
	error: null,
	isError: false
};

// async thunk
export const fetchVideos = createAsyncThunk('videos/fetchVideos', async ({ tags, search }) => {
	const videos = await getVideos(tags, search);
	return videos;
});

const videosSlice = createSlice({
	name: 'videos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideos.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchVideos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.videos = action.payload;
			})
			.addCase(fetchVideos.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.videos = [];
			});
	}
});

export default videosSlice.reducer;
