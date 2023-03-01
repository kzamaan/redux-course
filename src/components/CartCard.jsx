import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement, removeCartItem } from '../redux/cart/actions';
import { adjustStock } from '../redux/product/actions';

export default function CartCard({ cart }) {
	const dispatch = useDispatch();

	const handlerIncrementCart = (cart) => {
		// quantity validation
		if (cart.product.quantity > 0) {
			dispatch(increment(cart.product.id));

			dispatch(
				adjustStock({
					productId: cart.product.id,
					type: 'decrement'
				})
			);
		} else {
			alert('Not enough stock in this product, Please select another product.');
		}
	};

	const handlerDecrementCart = (cart) => {
		if (cart.quantity > 0) {
			dispatch(decrement(cart.product.id));

			dispatch(
				adjustStock({
					productId: cart.product.id,
					type: 'increment'
				})
			);
		} else {
			alert('Your cart is empty, Please add product into cart.');
		}
	};

	const handleRemoveCartItem = (cart) => {
		const { id, quantity, product } = cart;
		console.log(quantity);
		dispatch(
			adjustStock({
				productId: product.id,
				quantity: quantity,
				type: 'removed'
			})
		);
		dispatch(removeCartItem(id));
	};
	return (
		<div className="cartCard">
			<div className="flex items-center col-span-6 space-x-6">
				<img className="lws-cartImage" src={cart.product.imageUrl} alt="product" />

				<div className="space-y-2">
					<h4 className="lws-cartName">{cart.product.productName}</h4>
					<p className="lws-cartCategory">{cart.product.category}</p>
					<p>
						BDT <span className="lws-cartPrice">{cart.product.price}</span>
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
				<div className="flex items-center space-x-4">
					<button className="lws-incrementQuantity" onClick={() => handlerIncrementCart(cart)}>
						<i className="text-lg fa-solid fa-plus"></i>
					</button>
					<span className="lws-cartQuantity">{cart.quantity}</span>
					<button className="lws-decrementQuantity" onClick={() => handlerDecrementCart(cart)}>
						<i className="text-lg fa-solid fa-minus"></i>
					</button>
				</div>

				<p className="text-lg font-bold">
					BDT <span className="lws-calculatedPrice">{cart.product.price * cart.quantity}</span>
				</p>
			</div>

			<div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
				<button className="lws-removeFromCart" onClick={() => handleRemoveCartItem(cart)}>
					<i className="text-lg text-red-400 fa-solid fa-trash"></i>
				</button>
			</div>
		</div>
	);
}
