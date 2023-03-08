import React from 'react';

export default function Filter() {
	const handleFilterChange = (e) => {
		console.log(e.target.value);
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
						checked
						className="radio"
						onChange={handleFilterChange}
					/>
					<label htmlFor="lws-all">All</label>
				</div>
				<div>
					<input type="radio" name="filter" id="lws-saved" className="radio" onChange={handleFilterChange} />
					<label htmlFor="lws-saved">Saved</label>
				</div>
			</div>
		</div>
	);
}
