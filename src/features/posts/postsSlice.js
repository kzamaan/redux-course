import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPosts, updateLikeOnPostById } from './postsAPI';

// initial state
const initialState = {
	isLoading: false,
	posts: [],
	error: null,
	isError: false
};

// async thunk for fetching posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => await getPosts());

// async thunk for adding like on post
export const addedLikeOnPost = createAsyncThunk(
	'posts/addedLikeOnPost',
	async ({ id, likes }) => await updateLikeOnPostById({ id, likes })
);

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

		// add like on post
		builder.addCase(addedLikeOnPost.fulfilled, (state, action) => {
			const { id, likes } = action.payload;
			const post = state.posts.find((post) => post.id === id);
			if (post) {
				post.likes = likes;
			}
		});
	}
});

export default postsSlice.reducer;
