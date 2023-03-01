import initialState from './initialState';
import { ADDED, ADJUST_STOCK } from './actionTypes';

function nextTodoId(products) {
	const maxId = products.reduce((maxId, todo) => Math.max(todo.id, maxId), 0);
	return maxId + 1;
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADDED:
			return [
				...state,
				{
					id: nextTodoId(state),
					...action.payload
				}
			];
		case ADJUST_STOCK:
			return state.map((product) => {
				if (product.id === action.payload.productId) {
					switch (action.payload.type) {
						case 'increment':
							return {
								...product,
								quantity: product.quantity + 1
							};
						case 'decrement':
							return {
								...product,
								quantity: product.quantity - 1
							};
						case 'removed':
							return {
								...product,
								quantity: product.quantity + action.payload.quantity
							};
						default:
							return product;
					}
				}
				return product;
			});
		default:
			return state;
	}
};

export default reducer;
