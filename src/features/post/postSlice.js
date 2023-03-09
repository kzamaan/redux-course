import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPost, savePostById } from './postAPI';

// initial state
const initialState = {
	isLoading: false,
	post: {},
	error: null,
	isError: false
};

// async thunk
export const fetchPost = createAsyncThunk('post/fetchPost', async (id) => await getPost(id));

export const savePostIntoList = createAsyncThunk(
	'post/savePostById',
	async ({ id, isSaved }) => await savePostById({ id, isSaved })
);

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

		// save post into list
		builder.addCase(savePostIntoList.fulfilled, (state, action) => {
			const { isSaved } = action.payload;
			state.post.isSaved = isSaved;
		});
	}
});

export default postSlice.reducer;
