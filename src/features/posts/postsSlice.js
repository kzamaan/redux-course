import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts } from './postsAPI';

// initial state
const initialState = {
	isLoading: false,
	posts: [],
	error: null,
	isError: false
};

// async thunk
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
	const posts = await getPosts();
	return posts;
});

// create posts slice
const postsSlice = createSlice({
	name: 'posts',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.posts = [];
			});
	}
});

export default postsSlice.reducer;
