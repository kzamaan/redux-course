import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getVideo } from './videoAPI';
// initial state
const initialState = {
	isLoading: false,
	video: {},
	error: null,
	isError: false
};

// async thunk
export const fetchVideo = createAsyncThunk('video/fetchVideo', async (videoId) => {
	const video = await getVideo(videoId);
	return video;
});

const videoSlice = createSlice({
	name: 'video',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchVideo.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchVideo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.video = action.payload;
			})
			.addCase(fetchVideo.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.video = {};
			});
	}
});

export default videoSlice.reducer;
