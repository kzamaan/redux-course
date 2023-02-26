import React from 'react';

export default function Product({ product }) {
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
				<button className="lws-btnAddToCart">Add To Cart</button>
			</div>
		</div>
	);
}
