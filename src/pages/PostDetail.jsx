import React from 'react';
import PostDescription from '../components/posts/PostDescription';
import RelatedPost from '../components/posts/RelatedPost';

export default function PostDetail() {
	return (
		<div>
			<div className="container mt-8">
				<a href="index.html" className="inline-block text-gray-600 home-btn" id="lws-goHome">
					<i className="mr-2 fa-solid fa-house"></i>Go Home
				</a>
			</div>
			<section className="post-page-container">
				{/* <!-- detailed post  --> */}
				<PostDescription />

				<RelatedPost />
			</section>
		</div>
	);
}
