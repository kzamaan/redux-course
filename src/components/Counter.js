import Button from './Button';

export default function Counter({ id, increment, decrement, count }) {
	return (
		<div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
			<div className="text-2xl font-semibold" id="counter">
				{count}
			</div>
			<div className="flex space-x-3">
				<Button handler={() => increment(id)} background="bg-indigo-400">
					Increment
				</Button>
				<Button handler={() => decrement(id)} background="bg-red-400">
					Decrement
				</Button>
			</div>
		</div>
	);
}
