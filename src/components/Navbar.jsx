import React from 'react';

import notesImages from './../assets/images/notes.png';
import plusImage from './../assets/images/plus.png';
import doubleImage from './../assets/images/double-tick.png';

export default function Navbar() {
	return (
		<div>
			<form className="flex items-center bg-gray-100 px-4 py-4 rounded-md">
				<img src={notesImages} className="w-6 h-6" alt="Add todo" />
				<input
					type="text"
					placeholder="Type your todo"
					className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
				/>
				<button
					type="submit"
					className="appearance-none w-8 h-8 bg-no-repeat bg-contain"
					style={{ backgroundImage: `url('${plusImage}')` }}></button>
			</form>

			<ul className="flex justify-between my-4 text-xs text-gray-500">
				<li className="flex space-x-1 cursor-pointer">
					<img className="w-4 h-4" src={doubleImage} alt="Complete" />
					<span>Complete All Tasks</span>
				</li>
				<li className="cursor-pointer">Clear completed</li>
			</ul>
		</div>
	);
}
