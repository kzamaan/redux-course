import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import LikeUnlike from '../components/Description/LikeUnlike';
import RelatedVideo from '../components/Description/RelatedVideo';
import VideoPlayer from '../components/Description/VideoPlayer';
import Loading from '../components/ui/Loading';
import { fetchVideo } from '../features/video/videoSlice';

export default function Videos() {
	const { videoId } = useParams();
	const dispatch = useDispatch();
	const { video, isLoading, isError, error } = useSelector((state) => state.video);

	useEffect(() => {
		dispatch(fetchVideo(videoId));
	}, [dispatch, videoId]);

	// This is the content that will be rendered
	let content = null;
	if (isLoading) content = <Loading />;
	if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
	if (!isLoading && !isError && !video?.id) content = <div className="col-span-12">No video found</div>;

	if (!isLoading && !isError && video?.id) {
		content = (
			<div className="grid grid-cols-3 gap-2 lg:gap-8">
				<div className="col-span-full w-full space-y-8 lg:col-span-2">
					<VideoPlayer link={video.link} title={video.title} />

					<div>
						<h1 className="text-lg font-semibold tracking-tight text-slate-800">{video.title}</h1>
						<div className="pb-4 flex items-center space-between border-b">
							<h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
								Uploaded on {video.date}
							</h2>

							<LikeUnlike />
						</div>

						<div className="mt-4 text-sm text-[#334155] dark:text-slate-400">{video.description}</div>
					</div>
				</div>

				<RelatedVideo currentVideoId={video.id} tags={video.tags} />
			</div>
		);
	}

	return (
		<section className="pt-6 pb-20">
			<div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
		</section>
	);
}
