import PostCard from 'components/posts/PostCard';
import Sidebar from 'components/sidebar/Sidebar';
import { fetchPosts } from 'features/posts/postsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const dispatch = useDispatch();
	const { posts, isLoading, isError, error } = useSelector((state) => state.posts);

	// fetch the posts when the component is mounted
	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	// decide the content that will be rendered
	let content = null;
	// show loading if the posts are loading
	if (isLoading) content = <div>Loading...</div>;
	// show error if there is an error
	if (!isLoading && isError) content = <div>{error}</div>;
	// show the posts if the posts are loaded
	if (posts.length > 0 && !isLoading) content = posts.map((post) => <PostCard key={post.id} post={post} />);
	// show no posts found if the posts are loaded but there are no posts
	if (posts.length === 0 && !isLoading && !isError) content = <div>No posts found!</div>;

	return (
		<section className="wrapper">
			<Sidebar />
			<main className="post-container" id="lws-postContainer">
				{content}
			</main>
		</section>
	);
}
