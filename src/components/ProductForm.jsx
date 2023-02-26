import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { added } from '../redux/product/actions';

export default function ProductForm() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products);
	console.log('product from');

	const [productName, setProductName] = useState('');
	const [category, setCategory] = useState('');
	const [imageUrl, setImageUrl] = useState(
		`https://i.dummyjson.com/data/products/${products.length + 1}/thumbnail.jpg`
	);
	const [price, setPrice] = useState('');
	const [quantity, setQuantity] = useState('');

	const handleProductSubmit = (e) => {
		e.preventDefault();

		dispatch(
			added({
				productName,
				category,
				imageUrl,
				price,
				quantity
			})
		);

		setImageUrl(`https://i.dummyjson.com/data/products/${products.length + 1}/thumbnail.jpg`);
	};
	return (
		<div className="formContainer">
			<h4 className="formTitle">Add New Product</h4>
			<form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleProductSubmit}>
				<div className="space-y-2">
					<label htmlFor="lws-inputName">Product Name</label>
					<input
						onChange={(e) => setProductName(e.target.value)}
						className="addProductInput"
						id="lws-inputName"
						type="text"
						value={productName}
						required
					/>
				</div>
				<div className="space-y-2">
					<label htmlFor="lws-inputCategory">Category</label>
					<input
						onChange={(e) => setCategory(e.target.value)}
						className="addProductInput"
						id="lws-inputCategory"
						type="text"
						value={category}
						required
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="lws-inputImage">Image Url</label>
					<input
						onChange={(e) => setImageUrl(e.target.value)}
						className="addProductInput"
						id="lws-inputImage"
						type="text"
						value={imageUrl}
						required
					/>
				</div>
				<div className="grid grid-cols-2 gap-8 pb-4">
					<div className="space-y-2">
						<label htmlFor="lws-inputPrice">Price</label>
						<input
							onChange={(e) => setPrice(e.target.value)}
							className="addProductInput"
							type="number"
							id="lws-inputPrice"
							value={price}
							required
						/>
					</div>
					<div className="space-y-2">
						<label htmlFor="lws-inputQuantity">Quantity</label>
						<input
							onChange={(e) => setQuantity(e.target.value)}
							className="addProductInput"
							type="number"
							id="lws-inputQuantity"
							value={quantity}
							required
						/>
					</div>
				</div>

				<button type="submit" id="lws-inputSubmit" className="submit">
					Add Product
				</button>
			</form>
		</div>
	);
}
