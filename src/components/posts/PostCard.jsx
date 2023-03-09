import DisplayTags from 'components/ui/DisplayTags';
import { addedLikeOnPost } from 'features/posts/postsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
	// get dispatch function from redux
	const dispatch = useDispatch();
	// destructure post object
	const { id, title, createdAt, tags, likes, image, isSaved } = post || {};
	// handle like on post
	const handleLikeOnPost = () => {
		dispatch(addedLikeOnPost({ id, likes }));
	};

	return (
		<div className="lws-card">
			<Link to={`/post/${id}`}>
				<img src={image} className="lws-card-image" alt="" />
			</Link>
			<div className="p-4">
				<div className="lws-card-header">
					<p className="lws-publishedDate">{createdAt}</p>
					<p role="button" onClick={handleLikeOnPost} className="lws-likeCount">
						<i className="fa-regular fa-thumbs-up"></i>
						{likes}
					</p>
				</div>
				<Link to={`/post/${id}`} className="lws-postTitle">
					{title}
				</Link>
				<div className="lws-tags">
					<DisplayTags tags={tags} />
				</div>
				<div className="flex gap-2 mt-4">{isSaved && <span className="lws-badge"> Saved </span>}</div>
			</div>
		</div>
	);
}
