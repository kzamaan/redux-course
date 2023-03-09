import { setFilterBy } from 'features/filter/filterSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Filter() {
	// get the dispatch function
	const dispatch = useDispatch();
	// get the state from redux store
	const { filterBy } = useSelector((state) => state.filter);
	// set the state
	const [filterInput, setFilterInput] = useState(filterBy);

	// handle order by
	const handleFilterChange = (e) => {
		setFilterInput(e.target.value);
		dispatch(setFilterBy(e.target.value));
	};
	return (
		<div className="sidebar-content">
			<h4>Filter</h4>
			<div className="radio-group">
				<div>
					<input
						type="radio"
						name="filter"
						id="lws-all"
						className="radio"
						checked={filterInput === 'all'}
						value="all"
						onChange={handleFilterChange}
					/>
					<label htmlFor="lws-all">All</label>
				</div>
				<div>
					<input
						type="radio"
						name="filter"
						id="lws-saved"
						className="radio"
						checked={filterInput === 'saved'}
						value="saved"
						onChange={handleFilterChange}
					/>
					<label htmlFor="lws-saved">Saved</label>
				</div>
			</div>
		</div>
	);
}
