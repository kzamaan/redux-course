import Error from 'components/ui/Error';
import VideoLoader from 'components/ui/loaders/VideoLoader';
import { useGetVideosQuery } from 'features/api/apiSlice';
import Video from './Video';

export default function Videos() {
	const { data: videos, isLoading, isError } = useGetVideosQuery();

	let content = null;
	if (isLoading) {
		content = (
			<>
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
				<VideoLoader />
			</>
		);
	}

	if (isError && !isLoading) {
		content = <Error message="There was an error" />;
	}

	if (!isLoading && !isError && videos.length === 0) {
		content = <Error message="No videos found!" />;
	}
	if (!isLoading && !isError && videos.length > 0) {
		content = videos.map((video) => <Video key={video.id} video={video} />);
	}

	return content;
}
