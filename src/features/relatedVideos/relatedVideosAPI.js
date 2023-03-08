import axios from '../../utils/axios';

export const getRelatedVideos = async ({ tags, id }) => {
	const limit = 5;
	const baseQuery = `id_ne=${id}&_limit=${limit}`;
	const queryString = tags.length > 0 ? tags.map((tag) => `tags_like=${tag}`).join('&') + `&${baseQuery}` : baseQuery;
	const { data } = await axios.get(`/videos?${queryString}`);
	return data;
};
