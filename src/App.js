import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Videos from './pages/Videos';

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/videos/:videoId" element={<Videos />} />
				<Route path="*" element={<h1>404</h1>} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
