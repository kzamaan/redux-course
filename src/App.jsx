import Navbar from 'components/Navbar';
import AddNew from 'pages/AddNew';
import EditTask from 'pages/EditTask';
import Home from 'pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="text-[#111827]">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/add-new" element={<AddNew />} />
					<Route path="/edit/:taskId" element={<EditTask />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
