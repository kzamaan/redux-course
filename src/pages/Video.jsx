import Error from 'components/ui/Error';
import DescriptionLoader from 'components/ui/loaders/DescriptionLoader';
import PlayerLoader from 'components/ui/loaders/PlayerLoader';
import RelatedVideoLoader from 'components/ui/loaders/RelatedVideoLoader';
import Description from 'components/video/Description';
import Player from 'components/video/Player';
import RelatedVideos from 'components/video/related/RelatedVideos';
import { useGetVideoQuery } from 'features/api/apiSlice';
import { useParams } from 'react-router-dom';

export default function Video() {
	const { videoId } = useParams();
	const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

	let content = null;
	if (isLoading) {
		content = (
			<>
				<PlayerLoader /> <DescriptionLoader />
			</>
		);
	}

	if (isError && !isLoading) {
		content = <Error message="There was an error" />;
	}

	if (!isLoading && !isError && video?.id) {
		content = (
			<>
				<Player link={video.link} title={video.title} />
				<Description video={video} />
			</>
		);
	}

	return (
		<section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
			<div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
				<div className="grid grid-cols-3 gap-2 lg:gap-8">
					<div className="col-span-full w-full space-y-8 lg:col-span-2">{content}</div>

					{video?.id ? (
						<RelatedVideos id={video.id} title={video.title} />
					) : isLoading ? (
						<>
							<RelatedVideoLoader />
							<RelatedVideoLoader />
							<RelatedVideoLoader />
						</>
					) : (
						<Error message="There was an error" />
					)}
				</div>
			</div>
		</section>
	);
}
