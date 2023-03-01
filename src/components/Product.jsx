import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cart/actions';
import { adjustStock } from '../redux/product/actions';

export default function Product({ product }) {
	const dispatch = useDispatch();

	// add product in to cart
	const handlerAddToCart = (product) => {
		if (product.quantity > 0) {
			dispatch(addToCart(product.id));

			// dispatch action for adjust product stock
			dispatch(
				adjustStock({
					productId: product.id,
					type: 'decrement'
				})
			);
		} else {
			alert('Not enough stock in this product, Please select another product.');
		}
	};

	return (
		<div className="lws-productCard">
			<img className="lws-productImage" src={product.imageUrl} alt="product" />
			<div className="p-4 space-y-2">
				<h4 className="lws-productName">{product.productName}</h4>
				<p className="lws-productCategory">{product.category}</p>
				<div className="flex items-center justify-between pb-2">
					<p className="productPrice">
						BDT <span className="lws-price">{product.price}</span>
					</p>
					<p className="productQuantity">
						QTY <span className="lws-quantity">{product.quantity}</span>
					</p>
				</div>
				<button
					className="lws-btnAddToCart"
					onClick={() => handlerAddToCart(product)}
					disabled={product.quantity === 0}>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
