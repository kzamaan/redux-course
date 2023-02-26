import React from 'react';

export default function Product() {
	return (
		<div className="productWrapper">
			<div className="productContainer" id="lws-productContainer">
				<div className="lws-productCard">
					<img
						className="lws-productImage"
						src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
						alt="product"
					/>
					<div className="p-4 space-y-2">
						<h4 className="lws-productName">Spring and summershoes</h4>
						<p className="lws-productCategory">Mens shoes</p>
						<div className="flex items-center justify-between pb-2">
							<p className="productPrice">
								BDT <span className="lws-price">400</span>
							</p>
							<p className="productQuantity">
								QTY <span className="lws-quantity">10</span>
							</p>
						</div>
						<button className="lws-btnAddToCart">Add To Cart</button>
					</div>
				</div>

				<div className="lws-productCard">
					<img
						className="lws-productImage"
						src="https://i.dummyjson.com/data/products/40/thumbnail.jpg"
						alt="product"
					/>
					<div className="p-4 space-y-2">
						<h4 className="lws-productName">Women Winter Clothes</h4>
						<p className="lws-productCategory">Tops</p>
						<div className="flex items-center justify-between pb-2">
							<p className="productPrice">
								BDT <span className="lws-price">100</span>
							</p>
							<p className="productQuantity">
								QTY <span className="lws-quantity">30</span>
							</p>
						</div>
						<button className="lws-btnAddToCart">Add To Cart</button>
					</div>
				</div>
			</div>

			<div>
				<div className="formContainer">
					<h4 className="formTitle">Add New Product</h4>
					<form className="space-y-4 text-[#534F4F]" id="lws-addProductForm">
						<div className="space-y-2">
							<label htmlFor="lws-inputName">Product Name</label>
							<input className="addProductInput" id="lws-inputName" type="text" required />
						</div>
						<div className="space-y-2">
							<label htmlFor="lws-inputCategory">Category</label>
							<input className="addProductInput" id="lws-inputCategory" type="text" required />
						</div>

						<div className="space-y-2">
							<label htmlFor="lws-inputImage">Image Url</label>
							<input className="addProductInput" id="lws-inputImage" type="text" required />
						</div>
						<div className="grid grid-cols-2 gap-8 pb-4">
							<div className="space-y-2">
								<label htmlFor="lws-inputPrice">Price</label>
								<input className="addProductInput" type="number" id="lws-inputPrice" required />
							</div>
							<div className="space-y-2">
								<label htmlFor="lws-inputQuantity">Quantity</label>
								<input className="addProductInput" type="number" id="lws-inputQuantity" required />
							</div>
						</div>

						<button type="submit" id="lws-inputSubmit" className="submit">
							Add Product
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
