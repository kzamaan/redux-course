import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';

export default function HooksCounter() {
	const count = useSelector((state) => state.value);
	const dispatch = useDispatch();
	const incrementHandler = (value) => {
		dispatch(increment(value));
	};
	const decrementHandler = (value) => {
		dispatch(decrement(value));
	};
	return (
		<div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
			<div className="text-2xl font-semibold" id="counter">
				{count}
			</div>
			<div className="flex space-x-3">
				<Button handler={() => incrementHandler(5)} background="bg-indigo-400">
					Increment
				</Button>
				<Button handler={() => decrementHandler(1)} background="bg-red-400">
					Decrement
				</Button>
			</div>
		</div>
	);
}
