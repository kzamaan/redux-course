import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Product from './pages/Product';

import { useSelector } from 'react-redux';

function App() {
	const config = useSelector((state) => state.config);
	const { currentPage } = config;
	return (
		<div className="App">
			<Navbar />
			<main className="py-16">{currentPage === 'product' ? <Product /> : <Cart />}</main>
		</div>
	);
}

export default App;
