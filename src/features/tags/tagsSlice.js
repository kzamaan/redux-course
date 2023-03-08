import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getTags } from './tagsAPI';

// initial state
const initialState = {
	isLoading: false,
	tags: [],
	error: null,
	isError: false
};

// async thunk
export const fetchTags = createAsyncThunk('tags/fetchTags', async () => {
	const tags = await getTags();
	return tags;
});

const tagsSlice = createSlice({
	name: 'tags',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchTags.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchTags.fulfilled, (state, action) => {
				state.isLoading = false;
				state.tags = action.payload;
			})
			.addCase(fetchTags.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.tags = [];
			});
	}
});

export default tagsSlice.reducer;
