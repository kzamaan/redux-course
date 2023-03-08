import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagSelected } from '../../features/filter/filterSlice';

export default function Tag({ tag }) {
	const dispatch = useDispatch();
	const { selectedTags } = useSelector((state) => state.filter);

	const handleTagClick = () => {
		dispatch(tagSelected(tag.title));
	};

	const selectedClass = selectedTags.includes(tag.title) ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600';

	return (
		<div className={`${selectedClass} px-4 py-1 rounded-full cursor-pointer`} onClick={handleTagClick}>
			{tag.title}
		</div>
	);
}
