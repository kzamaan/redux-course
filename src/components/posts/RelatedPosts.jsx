import { fetchRelatedPosts } from 'features/relatedPosts/relatedPostsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RelatedPostCard from './RelatedPostCard';

export default function RelatedPosts({ tags, currentPostId }) {
	// get the dispatch function
	const dispatch = useDispatch();
	// get the related posts from the store
	const { posts, isLoading, isError, error } = useSelector((state) => state.relatedPosts);
	// fetch the related posts when the component is mounted
	useEffect(() => {
		dispatch(fetchRelatedPosts({ tags, id: currentPostId }));
	}, [dispatch, tags, currentPostId]);

	// This is the content that will be rendered
	let content = null;
	// show loading if the post is loading
	if (isLoading) content = <div>Loading...</div>;
	// show error if there is an error
	if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
	// show no post found if the post is not found
	if (!isLoading && !isError && !posts?.length) content = <div className="col-span-12">No post found</div>;
	// show the post if the post is loaded
	if (!isLoading && !isError && posts?.length) {
		content = posts.map((post) => <RelatedPostCard key={post.id} post={post} />);
	}

	return (
		<aside>
			<h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
				Related Posts
			</h4>
			<div className="space-y-4 related-post-container">{content}</div>
		</aside>
	);
}
