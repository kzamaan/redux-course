import PostCard from 'components/posts/PostCard';
import Sidebar from 'components/sidebar/Sidebar';
import { fetchPosts } from 'features/posts/postsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
	// get the dispatch function
	const dispatch = useDispatch();
	// get the posts from the store
	const { posts, isLoading, isError, error } = useSelector((state) => state.posts);
	const { filterBy, orderBy } = useSelector((state) => state.filter);

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
	if (posts.length > 0 && !isLoading) {
		let sortedPosts = [...posts];
		// filter the posts
		if (filterBy === 'saved') {
			sortedPosts = posts.filter((post) => post.isSaved);
		}
		// sort the posts by newest
		if (orderBy === 'newest') {
			sortedPosts = sortedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
		}
		// sort the post by most liked
		if (orderBy === 'most_liked') {
			sortedPosts = sortedPosts.sort((a, b) => b.likes - a.likes);
		}
		// map the posts to PostCard component
		content = sortedPosts.map((post) => <PostCard key={post.id} post={post} />);
	}
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
