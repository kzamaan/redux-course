import DisplayTags from 'components/ui/DisplayTags';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
	const { id, title, createdAt, tags, likes, image, isSaved } = post || {};
	return (
		<div className="lws-card">
			<Link to={`/post/${id}`}>
				<img src={image} className="lws-card-image" alt="" />
			</Link>
			<div className="p-4">
				<div className="lws-card-header">
					<p className="lws-publishedDate">{createdAt}</p>
					<p className="lws-likeCount">
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
