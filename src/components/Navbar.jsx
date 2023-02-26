import React from 'react';
import logo from './../assets/images/logo.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggledPages } from './../redux/config/actions';

export default function Navbar() {
	const dispatch = useDispatch();
	const config = useSelector((state) => state.config);
	console.log(config);

	const handleTogglePage = (e) => {
		e.preventDefault();
		const { currentPage } = config;
		const page = currentPage === 'product' ? 'cart' : 'product';
		dispatch(toggledPages(page));
	};

	return (
		<nav className="bg-[#171C2A] py-4">
			<div className="navBar">
				<a href="/">
					<img src={logo} alt="LWS" className="max-w-[140px]" />
				</a>

				<div className="flex gap-4">
					<a href="/" className="navHome" id="lws-home">
						Home
					</a>
					<a href="cart.html" onClick={handleTogglePage} className="navCart" id="lws-cart">
						<i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
						<span id="lws-totalCart">0</span>
					</a>
				</div>
			</div>
		</nav>
	);
}
