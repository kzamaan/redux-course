import React from 'react';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';

export default function ProductList() {
	// get all product from redux store
	const products = useSelector((state) => state.products);

	return (
		<div className="productWrapper">
			<div className="productContainer" id="lws-productContainer">
				{products.length > 0 ? (
					products.map((product) => <Product key={product.id} product={product} />)
				) : (
					<p>No product found, You can add product.</p>
				)}
			</div>

			<div>
				<ProductForm />
			</div>
		</div>
	);
}
