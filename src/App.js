import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import ProductList from './pages/ProductList';

import { useSelector } from 'react-redux';

function App() {
	const config = useSelector((state) => state.config);
	const { currentPage } = config;
	return (
		<div className="App">
			<Navbar />
			<main className="py-16">{currentPage === 'product' ? <ProductList /> : <Cart />}</main>
		</div>
	);
}

export default App;
