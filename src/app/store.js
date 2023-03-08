import { configureStore } from '@reduxjs/toolkit';
import postsReducer from 'features/posts/postsSlice';

// configure store
export const store = configureStore({
	reducer: {
		posts: postsReducer
	}
});
