import { useState } from 'react';

export default function ProjectList() {
	const [projects, setProjects] = useState([]);
	const handlerCheckbox = (e) => {
		console.log(e.target);
		setProjects([...projects, e.target.className]);
	};
	return (
		<div>
			<h3 className="text-xl font-bold">Projects</h3>
			<div className="mt-3 space-y-4">
				<div className="checkbox-container">
					<input type="checkbox" className="color-scoreboard" checked onChange={handlerCheckbox} />
					<p className="label">Scoreboard</p>
				</div>

				<div className="checkbox-container">
					<input type="checkbox" className="color-flight" checked onChange={handlerCheckbox} />
					<p className="label">Flight Booking</p>
				</div>

				<div className="checkbox-container">
					<input type="checkbox" className="color-productCart" checked onChange={handlerCheckbox} />
					<p className="label">Product Cart</p>
				</div>

				<div className="checkbox-container">
					<input type="checkbox" className="color-bookstore" checked onChange={handlerCheckbox} />
					<p className="label">Book Store</p>
				</div>
				<div className="checkbox-container">
					<input type="checkbox" className="color-blog" checked onChange={handlerCheckbox} />
					<p className="label">Blog Application</p>
				</div>
				<div className="checkbox-container">
					<input type="checkbox" className="color-jobFinder" checked onChange={handlerCheckbox} />
					<p className="label">Job Finder</p>
				</div>
			</div>
		</div>
	);
}
