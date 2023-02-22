import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Counter from './components/Counter';
import HooksCounter from './components/HooksCounter';

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

	// eslint-disable-next-line no-unused-vars
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
	// eslint-disable-next-line no-unused-vars
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
	// eslint-disable-next-line no-unused-vars
	const totalCount = state.reduce((total, counter) => total + counter.count, 0);

	return (
		<Provider store={store}>
			<div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
				<h1 className="max-w-md mx-auto text-center text-2xl font-bold">Simple Counter Application</h1>

				<div className="max-w-md mx-auto mt-10 space-y-5">
					<HooksCounter />
				</div>
			</div>
		</Provider>
	);
}

export default App;
