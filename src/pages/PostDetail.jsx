import PostDescription from 'components/posts/PostDescription';
import RelatedPosts from 'components/posts/RelatedPosts';
import { fetchPost } from 'features/post/postSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export default function PostDetail() {
	// get the post id from the url
	const { postId } = useParams();
	// get the dispatch function
	const dispatch = useDispatch();
	// get the post from the store
	const { post, isLoading, isError, error } = useSelector((state) => state.post);
	// fetch the post when the component is mounted
	useEffect(() => {
		dispatch(fetchPost(postId));
	}, [dispatch, postId]);

	// This is the content that will be rendered
	let content = null;
	// show loading if the post is loading
	if (isLoading) content = <div>Loading...</div>;
	// show error if there is an error
	if (!isLoading && isError) content = <div className="col-span-12">{error}</div>;
	// show no post found if the post is not found
	if (!isLoading && !isError && !post?.id) content = <div className="col-span-12">No post found</div>;
	// show the post if the post is loaded
	if (!isLoading && !isError && post?.id) {
		content = (
			<>
				<PostDescription post={post} />
				<RelatedPosts tags={post.tags} currentPostId={post.id} />
			</>
		);
	}

	return (
		<div>
			<div className="container mt-8">
				<Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome">
					<i className="mr-2 fa-solid fa-house"></i>Go Home
				</Link>
			</div>
			<section className="post-page-container">{content}</section>
		</div>
	);
}
