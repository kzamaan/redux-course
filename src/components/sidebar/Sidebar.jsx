import { setOrderBy } from 'features/filter/filterSlice';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Filter from './Filter';

export default function Sidebar() {
	// get the dispatch function
	const dispatch = useDispatch();
	// get the state from redux store
	const { orderBy } = useSelector((state) => state.filter);
	// set the state
	const [sort, setSort] = useState(orderBy);

	// handle order by
	const orderByHandler = (e) => {
		setSort(e.target.value);
		dispatch(setOrderBy(e.target.value));
	};

	return (
		<aside>
			<div className="sidebar-items">
				<div className="sidebar-content">
					<h4>Sort</h4>
					<select
						name="sort"
						id="lws-sort"
						className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
						value={sort}
						onChange={orderByHandler}>
						<option value="">Default</option>
						<option value="newest">Newest</option>
						<option value="most_liked">Most Liked</option>
					</select>
				</div>
				<Filter />
			</div>
		</aside>
	);
}
