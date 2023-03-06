const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const fetch = require('node-fetch');
// initial state

const initialState = {
	loading: false,
	posts: [],
	error: ''
};

const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();
	return data;
});

const postSlice = createSlice({
	name: 'post',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state, action) => {
			state.loading = true;
			state.error = '';
		});

		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.loading = false;
			state.posts = action.payload;
			state.error = '';
		});

		builder.addCase(fetchPosts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error;
		});
	}
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
