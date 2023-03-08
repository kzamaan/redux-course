import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBlogs } from './blogsAPI';

// initial state
const initialState = {
	isLoading: false,
	blogs: [],
	error: null,
	isError: false
};

// async thunk
export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
	const blogs = await getBlogs();
	return blogs;
});

const blogsSlice = createSlice({
	name: 'blogs',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchBlogs.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchBlogs.fulfilled, (state, action) => {
				state.isLoading = false;
				state.blogs = action.payload;
			})
			.addCase(fetchBlogs.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.error?.message;
				state.isError = true;
				state.blogs = [];
			});
	}
});

export default blogsSlice.reducer;
