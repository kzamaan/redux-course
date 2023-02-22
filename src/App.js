import { Provider } from 'react-redux';
import BookingHeader from './components/BookingHeader';
import AddBookingForm from './components/AddBookingForm';
import BookingTable from './components/BookingTable';
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<BookingHeader />

				<section>
					<AddBookingForm />

					<div className="table-container">
						<BookingTable />
					</div>
				</section>
			</div>
		</Provider>
	);
}

export default App;
