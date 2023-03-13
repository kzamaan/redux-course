import Error from 'components/ui/Error';
import RelatedVideoLoader from 'components/ui/loaders/RelatedVideoLoader';
import { useGetRelatedVideosQuery } from 'features/api/apiSlice';
import RelatedVideo from './RelatedVideo';

export default function RelatedVideos({ id, title }) {
	const { data: videos, isLoading, isError } = useGetRelatedVideosQuery({ id, title });

	let content = null;

	if (isLoading) {
		content = (
			<>
				<RelatedVideoLoader />
				<RelatedVideoLoader />
				<RelatedVideoLoader />
				<RelatedVideoLoader />
				<RelatedVideoLoader />
			</>
		);
	}

	if (isError && !isLoading) {
		content = <Error message="Something went wrong" />;
	}

	if (!isLoading && !isError && videos.length === 0) {
		content = <Error message="No related videos found" />;
	}

	if (!isLoading && !isError && videos.length > 0) {
		content = videos.map((video) => <RelatedVideo key={video.id} video={video} />);
	}

	return <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">{content}</div>;
}
