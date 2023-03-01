import initialState from './initialState';
import { ADD_TO_CART, INCREMENT_QTY, DECREMENT_QTY, REMOVE } from './actionTypes';

function nextCartsId(carts) {
	const maxId = carts.reduce((maxId, item) => Math.max(item.id, maxId), 0);
	return maxId + 1;
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			// check product already exists in to cart
			const cartItem = state.find((cart) => cart.productId === action.payload);
			if (cartItem) {
				return state.map((cart) => {
					if (cart.productId === action.payload) {
						return {
							...cart,
							quantity: cartItem.quantity + 1
						};
					} else {
						return cart;
					}
				});
			}
			// add new product in to cart
			return [
				...state,
				{
					id: nextCartsId(state),
					quantity: 1,
					productId: action.payload
				}
			];

		case INCREMENT_QTY:
			return state.map((cart) => {
				if (cart.productId === action.payload) {
					return {
						...cart,
						quantity: cart.quantity + 1
					};
				} else {
					return cart;
				}
			});

		case DECREMENT_QTY:
			return state.map((cart) => {
				if (cart.productId === action.payload) {
					return {
						...cart,
						quantity: cart.quantity - 1
					};
				} else {
					return cart;
				}
			});

		case REMOVE:
			return state.filter((cart) => cart.id !== action.payload);

		default:
			return state;
	}
};

export default reducer;
