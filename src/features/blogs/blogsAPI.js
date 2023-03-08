import axios from '../../utils/axios';

export const getBlogs = async () => {
	const { data } = await axios.get(`/blogs`);
	return data;
};
