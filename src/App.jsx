import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import Add from 'pages/Add';
import Edit from 'pages/Edit';
import Home from 'pages/Home';
import Video from 'pages/Video';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/videos/:videoId" element={<Video />} />
				<Route path="/videos/add" element={<Add />} />
				<Route path="/videos/edit/:videoId" element={<Edit />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
