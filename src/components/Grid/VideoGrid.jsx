import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../ui/Loading';
import VideoItem from './VideoItem';

export default function VideoGrid() {
	const dispatch = useDispatch();
	const { videos, isLoading, error, isError } = useSelector((state) => state.videos);
	const { search, selectedTags } = useSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchVideos({ tags: selectedTags, search }));
	}, [dispatch, selectedTags, search]);

	let content = null;

	if (isLoading) content = <Loading />;
	if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
	if (videos.length > 0 && !isLoading) content = videos.map((video) => <VideoItem key={video.id} video={video} />);
	if (videos.length === 0 && !isLoading) content = <div className="col-span-12">No videos found</div>;

	return (
		<section className="pt-12">
			<section className="pt-12">
				<div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">{content}</div>
			</section>
		</section>
	);
}
