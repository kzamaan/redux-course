import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedVideos } from '../../features/relatedVideos/relatedVideoSlice';
import RelatedVideoListItem from './RelatedVideoListItem';

export default function RelatedVideo({ currentVideoId, tags }) {
	const dispatch = useDispatch();
	const { relatedVideos, isLoading, error, isError } = useSelector((state) => state.relatedVideos);

	useEffect(() => {
		dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
	}, [dispatch, tags, currentVideoId]);

	let content = null;

	if (isLoading) content = <p>Loading...</p>;
	if (!isLoading && isError) content = <p>{error}</p>;
	if (!isLoading && !isError && relatedVideos.length === 0) content = <p>No related videos found</p>;
	if (!isLoading && !isError && relatedVideos.length > 0)
		content = relatedVideos.map((video) => <RelatedVideoListItem key={video.id} video={video} />);

	return <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">{content}</div>;
}
