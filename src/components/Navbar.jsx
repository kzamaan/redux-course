import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate } from 'react-router-dom';
import logoImage from '../assets/lws.svg';
import searchImage from '../assets/search.svg';
import { searchChanged } from './../features/filter/filterSlice';

export default function Navbar() {
	const dispatch = useDispatch();
	const { search } = useSelector((state) => state.filter);
	const [searchValue, setSearchValue] = useState(search);

	const navigate = useNavigate();
	const match = useMatch('/');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(searchChanged(searchValue));
		if (!match) navigate('/');
	};

	return (
		<nav className="bg-slate-100 shadow-md">
			<div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
				<a href="/">
					<img className="h-10" src={logoImage} alt="Learn with Sumit" />
				</a>
				<div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
					<form onSubmit={handleSubmit}>
						<input
							className="outline-none border-none mr-2"
							type="search"
							name="search"
							placeholder="Search"
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
						/>
					</form>
					<img className="inline h-4 cursor-pointer" src={searchImage} alt="Search" />
				</div>
			</div>
		</nav>
	);
}
