import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPost } from './postAPI';

// initial state
const initialState = {
	isLoading: false,
	post: {},
	error: null,
	isError: false
};

// async thunk
export const fetchPost = createAsyncThunk('post/fetchPost', async (id) => {
	const post = await getPost(id);
	return post;
});

// create post slice
const postSlice = createSlice({
	name: 'post',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchPost.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchPost.fulfilled, (state, action) => {
				state.isLoading = false;
				state.post = action.payload;
			})
			.addCase(fetchPost.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.post = {};
			});
	}
});

export default postSlice.reducer;
