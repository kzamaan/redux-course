import axios from 'utils/axios';

// get all post from server
export const getPosts = async () => {
	const { data } = await axios.get('/blogs');
	return data;
};
