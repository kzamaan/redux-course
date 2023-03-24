import logoImage from 'assets/images/logo.svg';
import { projectSearchChanged } from 'features/filter/filterSlice';
import { useDispatch } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';

export default function Navbar() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const match = useMatch('/');

	// debouncing function
	const debounce = function (callback, delay) {
		let timeout;
		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(function () {
				callback.apply(this, args);
			}, delay);
		};
	};

	const searchHandler = debounce((e) => {
		dispatch(projectSearchChanged(e.target.value));
		if (!match) {
			navigate('/');
		}
	}, 300);

	return (
		<nav className="container relative py-3">
			<div className="flex items-center justify-between">
				<Link to="/">
					<img src={logoImage} alt="logo" />
				</Link>
				<div className="flex-1 max-w-xs search-field group">
					<i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
					<input
						type="text"
						placeholder="Search Task"
						className="search-input"
						id="lws-searchTask"
						onChange={searchHandler}
					/>
				</div>
			</div>
		</nav>
	);
}
