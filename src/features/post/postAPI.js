import axios from 'utils/axios';

// get all post from server
export const getPost = async (id) => {
	const { data } = await axios.get(`/blogs/${id}`);
	return data;
};
