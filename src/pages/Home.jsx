import PostCard from 'components/posts/PostCard';
import Sidebar from 'components/Sidebar/Sidebar';
import { fetchPosts } from 'features/posts/postsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	const dispatch = useDispatch();
	const { posts, isLoading, isError, error } = useSelector((state) => state.posts);

	useEffect(() => {
		dispatch(fetchPosts());
	}, [dispatch]);

	// decide the content that will be rendered
	let content = null;
	if (isLoading) content = <div>Loading...</div>;
	if (!isLoading && isError) content = <div>{error}</div>;
	if (posts.length > 0 && !isLoading) content = posts.map((post) => <PostCard key={post.id} post={post} />);
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
