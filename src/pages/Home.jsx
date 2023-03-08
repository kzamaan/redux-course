import React from 'react';
import Tags from '../components/Tags/Tags';
import VideoGrid from '../components/Grid/VideoGrid';
import Pagination from '../components/ui/Pagination';

export default function Home() {
	return (
		<div>
			<Tags />
			<VideoGrid />
			<Pagination />
		</div>
	);
}
