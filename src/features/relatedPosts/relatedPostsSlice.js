import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRelatedPosts } from './relatedPostsAPI';

// initial state
const initialState = {
	isLoading: false,
	posts: [],
	error: null,
	isError: false
};

// async thunk for fetching posts
export const fetchRelatedPosts = createAsyncThunk(
	'relatedPosts/fetchRelatedPosts',
	async ({ tags, id }) => await getRelatedPosts({ tags, id })
);

// create related posts slice
const relatedPostsSlice = createSlice({
	name: 'relatedPosts',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchRelatedPosts.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.posts = action.payload;
			})
			.addCase(fetchRelatedPosts.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.posts = [];
			});
	}
});

export default relatedPostsSlice.reducer;
