import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from '../components/CartCard';

export default function Cart() {
	// get all carts and products from redux store
	const carts = useSelector((state) => state.cart);
	const products = useSelector((state) => state.products);

	// added product info by product id from carts item
	const cartWithProducts = carts.map((cart) => {
		return {
			...cart,
			product: products.find((product) => product.id === cart.productId)
		};
	});

	// calculate subtotal
	const subTotal = cartWithProducts.reduce((total, cart) => (total += cart.product.price * cart.quantity), 0);

	return (
		<div className="container 2xl:px-8 px-2 mx-auto">
			<h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
			<div className="cartListContainer">
				<div className="space-y-6">
					{cartWithProducts.length > 0 ? (
						cartWithProducts.map((cart) => <CartCard key={cart.id} cart={cart} />)
					) : (
						<div>No product into cart, Please select a product.</div>
					)}
				</div>

				{cartWithProducts.length > 0 && (
					<div>
						<div className="billDetailsCard">
							<h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
							<div className="space-y-4">
								<div className="flex items-center justify-between">
									<p>Sub Total</p>
									<p>
										BDT <span className="lws-subtotal">{subTotal}</span>
									</p>
								</div>

								<div className="flex items-center justify-between">
									<p>Discount</p>
									<p>
										BDT <span className="lws-discount">0</span>
									</p>
								</div>

								<div className="flex items-center justify-between">
									<p>VAT</p>
									<p>
										BDT <span className="vat">0</span>
									</p>
								</div>

								<div className="flex items-center justify-between pb-4">
									<p className="font-bold">TOTAL</p>
									<p className="font-bold">
										BDT <span className="lws-total">{subTotal}</span>
									</p>
								</div>
								<button className="placeOrderbtn">place order</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
