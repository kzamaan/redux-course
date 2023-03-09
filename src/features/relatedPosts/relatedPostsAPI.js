import axios from 'utils/axios';

// get all post from server
export const getRelatedPosts = async ({ tags, id }) => {
	const baseQuery = `id_ne=${id}`;
	const tagQuery = tags.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') : '';
	const queryString = `${baseQuery}&${tagQuery}`;
	const { data } = await axios.get(`/blogs?${queryString}`);
	return data;
};
