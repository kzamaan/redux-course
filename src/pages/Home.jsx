import React from 'react';
import PostCard from '../components/posts/PostCard';
import Sidebar from '../components/Sidebar/Sidebar';

export default function Home() {
	return (
		<section className="wrapper">
			<Sidebar />
			<main className="post-container" id="lws-postContainer">
				<PostCard />
				<PostCard />
			</main>
		</section>
	);
}
