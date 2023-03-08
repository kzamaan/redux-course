import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getRelatedVideos } from './relatedVideosAPI';
// initial state
const initialState = {
	isLoading: false,
	relatedVideos: [],
	error: null,
	isError: false
};

// async thunk
export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos', async ({ tags, id }) => {
	const relatedVideos = await getRelatedVideos({ tags, id });
	return relatedVideos;
});

const relatedVideosSlice = createSlice({
	name: 'relatedVideos',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatedVideos.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
				state.isLoading = false;
				state.relatedVideos = action.payload;
			})
			.addCase(fetchRelatedVideos.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.relatedVideos = [];
			});
	}
});

export default relatedVideosSlice.reducer;
