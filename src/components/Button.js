import React from 'react';

export default function Button({ children, handler, background }) {
	return (
		<button onClick={handler} className={` text-white px-3 py-2 rounded shadow ${background}`}>
			{children}
		</button>
	);
}
