import { useState } from 'react';
import Counter from './components/Counter';
import State from './components/Stats';

const initialState = [
	{
		id: 1,
		count: 0,
	},
	{
		id: 2,
		count: 0,
	},
];

function App() {
	const [state, setState] = useState(initialState);

	const increment = (id) => {
		const updatedCounter = state.map((counter) => {
			if (counter.id === id) {
				return {
					...counter,
					count: counter.count + 1,
				};
			} else {
				return { ...counter };
			}
		});
		setState(updatedCounter);
	};

	const decrement = (id) => {
		const updatedCounter = state.map((counter) => {
			if (counter.id === id) {
				return {
					...counter,
					count: counter.count - 1,
				};
			} else {
				return { ...counter };
			}
		});
		setState(updatedCounter);
	};

	const totalCount = state.reduce((total, counter) => total + counter.count, 0);

	return (
		<div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
			<h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>

			<div className="max-w-md mx-auto mt-10 space-y-5">
				{state.map((counter) => (
					<Counter
						key={counter.id}
						id={counter.id}
						increment={increment}
						decrement={decrement}
						count={counter.count}
					/>
				))}
				<State count={totalCount} />
			</div>
		</div>
	);
}

export default App;
