import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPost, savePostById } from './postAPI';

// initial state
const initialState = {
	isLoading: false,
	post: {},
	error: null,
	isError: false
};

// async thunk for fetching post
export const fetchPost = createAsyncThunk('post/fetchPost', async (id) => await getPost(id));

// async thunk for saving post into list
export const savePostIntoList = createAsyncThunk(
	'post/savePostById',
	async ({ id, isSaved }) => await savePostById({ id, isSaved })
);

// create post slice
const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		updatePostLikeCount: (state, action) => {
			state.post.likes = action.payload;
		}
	},
	extraReducers: (builder) => {
		// fetch post
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
export const { updatePostLikeCount } = postSlice.actions;
