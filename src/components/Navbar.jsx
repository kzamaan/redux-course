import React from 'react';
import logo from './../assets/images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggledPages } from './../redux/config/actions';

export default function Navbar() {
	const dispatch = useDispatch();
	const carts = useSelector((state) => state.cart);
	const totalCartItems = carts.reduce((total, cart) => total + cart.quantity, 0);

	// toggle home page and cart page
	const handleTogglePage = (e, page) => {
		e.preventDefault();
		dispatch(toggledPages(page));
	};

	return (
		<nav className="bg-[#171C2A] py-4">
			<div className="navBar">
				<a href="/">
					<img src={logo} alt="LWS" className="max-w-[140px]" />
				</a>

				<div className="flex gap-4">
					<a href="/" onClick={(e) => handleTogglePage(e, 'product')} className="navHome" id="lws-home">
						Home
					</a>
					<a href="cart.html" onClick={(e) => handleTogglePage(e, 'cart')} className="navCart" id="lws-cart">
						<i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
						<span id="lws-totalCart">{totalCartItems}</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
