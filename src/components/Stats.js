import React from 'react';

export default function State({ count }) {
	return (
		<div>
			<div className="p-4 h-32 flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
				<div className="text-2xl font-semibold text-center" id="counter">
					<p>Total Count</p>
					<p>{count}</p>
				</div>
			</div>
		</div>
	);
}
