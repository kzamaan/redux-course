import DisplayTags from 'components/ui/DisplayTags';
import { Link } from 'react-router-dom';

export default function RelatedPostCard({ post }) {
	const { id, title, tags, date, image } = post || {};
	return (
		<div className="card">
			<Link to={`/post/${id}`}>
				<img src={image} className="card-image" alt="" />
			</Link>
			<div className="p-4">
				<Link to={`/post/${id}`} className="text-lg post-title lws-RelatedPostTitle">
					{title}
				</Link>
				<div className="mb-0 tags">
					<DisplayTags tags={tags} />
				</div>
				<p>{date}</p>
			</div>
		</div>
	);
}
