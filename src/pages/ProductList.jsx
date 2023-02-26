import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';

export default function ProductList() {
	const products = useSelector((state) => state.products);
	console.log('products', products);

	return (
		<div className="productWrapper">
			<div className="productContainer" id="lws-productContainer">
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>

			<div>
				<ProductForm />
			</div>
		</div>
	);
}
