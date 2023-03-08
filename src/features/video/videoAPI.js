import axios from '../../utils/axios';

export const getVideo = async (videoId) => {
	const { data } = await axios.get(`/videos/${videoId}`);
	return data;
};
