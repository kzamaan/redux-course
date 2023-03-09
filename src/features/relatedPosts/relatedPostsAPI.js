import axios from 'utils/axios';

// get all post from server
export const getRelatedPosts = async ({ tags, id }) => {
	// create query string
	const tagQuery = tags.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') : '';
	// create query string
	const queryString = `id_ne=${id}&${tagQuery}`;
	// get all posts from server
	const { data } = await axios.get(`/blogs?${queryString}`);
	return data;
};
