import BookList from './components/BookList';
import Header from './components/Header';
import NewBookForm from './components/NewBookForm';
import { useDispatch, useSelector } from 'react-redux';
import { filteringBook } from './redux/books/actions';

function App() {
	const dispatch = useDispatch();
	const { category } = useSelector((state) => state.books);

	// category filtering
	const categoryFiltering = (type) => {
		dispatch(filteringBook(type));
	};

	return (
		<div className="App">
			<Header />

			<main className="py-12 2xl:px-6">
				<div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
					<div className="order-2 xl:-order-1">
						<div className="flex items-center justify-between mb-12">
							<h4 className="mt-2 text-xl font-bold">Book List</h4>

							<div className="flex items-center space-x-4">
								<button
									className={`filter-btn ${category === 'all' && 'active-filter'}`}
									id="lws-filterAll"
									onClick={() => categoryFiltering('all')}>
									All
								</button>
								<button
									className={`filter-btn ${category === 'featured' && 'active-filter'}`}
									id="lws-filterFeatured"
									onClick={() => categoryFiltering('featured')}>
									Featured
								</button>
							</div>
						</div>
						<BookList />
					</div>
					<div>
						<NewBookForm />
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
