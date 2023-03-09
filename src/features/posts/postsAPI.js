import axios from 'utils/axios';

// get all post from server
export const getPosts = async () => {
	const { data } = await axios.get('/blogs');
	return data;
};
// add like on post by id
export const updateLikeOnPostById = async ({ id, likes }) => {
	const { data } = await axios.patch(`/blogs/${id}`, {
		likes: likes + 1
	});
	return data;
};
