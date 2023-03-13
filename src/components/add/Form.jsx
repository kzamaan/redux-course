import Error from 'components/ui/Error';
import Success from 'components/ui/Success';
import TextArea from 'components/ui/TextArea';
import TextInput from 'components/ui/TextInput';
import { useAddVideoMutation } from 'features/api/apiSlice';
import { useState } from 'react';

export default function Form() {
	const [addVideo, { isLoading, isError, isSuccess }] = useAddVideoMutation();

	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [link, setLink] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [date, setDate] = useState('');
	const [duration, setDuration] = useState('');
	const [views, setViews] = useState('');

	const resetForm = () => {
		setTitle('');
		setAuthor('');
		setDescription('');
		setLink('');
		setThumbnail('');
		setDate('');
		setDuration('');
		setViews('');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		addVideo({
			title,
			author,
			description,
			link,
			thumbnail,
			date,
			duration,
			views
		});
		resetForm();
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="shadow overflow-hidden sm:rounded-md">
				<div className="px-4 py-5 bg-white sm:p-6">
					<div className="grid grid-cols-6 gap-6">
						<div className="col-span-6 sm:col-span-3">
							<TextInput title="Video Title" onChange={(e) => setTitle(e.target.value)} value={title} />
						</div>

						<div className="col-span-6 sm:col-span-3">
							<TextInput title="Author" onChange={(e) => setAuthor(e.target.value)} value={author} />
						</div>

						<div className="col-span-6">
							<TextArea
								title="Description"
								onChange={(e) => setDescription(e.target.value)}
								value={description}
							/>
						</div>

						<div className="col-span-6">
							<TextInput
								title="YouTube Video link"
								onChange={(e) => setLink(e.target.value)}
								value={link}
							/>
						</div>

						<div className="col-span-6">
							<TextInput
								title="Thumbnail link"
								onChange={(e) => setThumbnail(e.target.value)}
								value={thumbnail}
							/>
						</div>

						<div className="col-span-6 sm:col-span-6 lg:col-span-2">
							<TextInput title="Upload Date" onChange={(e) => setDate(e.target.value)} value={date} />
						</div>

						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<TextInput
								title="Video Duration"
								onChange={(e) => setDuration(e.target.value)}
								value={duration}
							/>
						</div>

						<div className="col-span-6 sm:col-span-3 lg:col-span-2">
							<TextInput
								title="Video no of views"
								onChange={(e) => setViews(e.target.value)}
								value={views}
							/>
						</div>
					</div>
				</div>
				<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
					<button
						type="submit"
						disabled={isLoading}
						className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500">
						Save
					</button>
				</div>

				{isSuccess && <Success message="Video was added successfully" />}
				{isError && <Error message="There was an adding error" />}
			</div>
		</form>
	);
}
