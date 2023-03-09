import axios from 'utils/axios';

// get all post from server
export const getPost = async (id) => {
	const { data } = await axios.get(`/blogs/${id}`);
	return data;
};

// save post by id
export const savePostById = async ({ id, isSaved }) => {
	const { data } = await axios.patch(`/blogs/${id}`, {
		isSaved: !isSaved
	});
	return data;
};
