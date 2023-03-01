import BookList from './components/BookList';
import Header from './components/Header';
import NewBookForm from './components/NewBookForm';

function App() {
	return (
		<div className="App">
			<Header />

			<main className="py-12 2xl:px-6">
				<div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
					<div className="order-2 xl:-order-1">
						<div className="flex items-center justify-between mb-12">
							<h4 className="mt-2 text-xl font-bold">Book List</h4>

							<div className="flex items-center space-x-4">
								<button className="filter-btn active-filter" id="lws-filterAll">
									All
								</button>
								<button className="filter-btn" id="lws-filterFeatured">
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
