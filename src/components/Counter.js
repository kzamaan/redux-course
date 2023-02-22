import Button from './Button';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';

function Counter({ increment, decrement, count }) {
	return (
		<div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
			<div className="text-2xl font-semibold" id="counter">
				{count}
			</div>
			<div className="flex space-x-3">
				<Button handler={increment} background="bg-indigo-400">
					Increment
				</Button>
				<Button handler={decrement} background="bg-red-400">
					Decrement
				</Button>
			</div>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		count: state.value,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: (value) => dispatch(increment(value)),
		decrement: (value) => dispatch(decrement(value)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
