import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/post/:postId" element={<PostDetail />} />
				<Route path="*" element={<h1 style={{ textAlign: 'center' }}>404 page not found!</h1>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
