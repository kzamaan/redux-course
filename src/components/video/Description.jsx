import deleteImage from 'assets/delete.svg';
import editImage from 'assets/edit.svg';
import { useDeleteVideoMutation } from 'features/api/apiSlice';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Description({ video }) {
	const { title, date, description, id } = video;
	const navigate = useNavigate();
	const [deleteVideo, { isSuccess, isLoading, isError }] = useDeleteVideoMutation();

	const handleDelete = () => {
		deleteVideo(id);
	};

	useEffect(() => {
		if (isSuccess) {
			navigate('/');
		}
	}, [isSuccess, navigate]);

	return (
		<div>
			<h1 className="text-lg font-semibold tracking-tight text-slate-800">{title}</h1>
			<div className="pb-4 flex items-center space-between border-b gap-4">
				<h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">Uploaded on {date}</h2>

				<div className="flex gap-6 w-full justify-end">
					<div className="flex gap-1">
						<div className="shrink-0">
							<img className="w-5 block" src={editImage} alt="Edit" />
						</div>
						<Link to={`/videos/edit/${id}`}>
							<span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">Edit</span>
						</Link>
					</div>
					<div className="flex gap-1">
						<div className="shrink-0">
							<img className="w-5 block" src={deleteImage} alt="Delete" />
						</div>
						<div
							className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer"
							onClick={handleDelete}>
							Delete
						</div>
					</div>
				</div>
			</div>

			<div className="mt-4 text-sm text-[#334155] dark:text-slate-400">{description}</div>

			{isLoading && <div className="text-sm text-[#334155] dark:text-slate-400">Deleting...</div>}
			{isError && <div className="text-sm text-[#334155] dark:text-slate-400">There was an error</div>}
		</div>
	);
}
