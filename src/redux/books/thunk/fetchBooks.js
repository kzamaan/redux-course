import { loaded } from '../actions';

const fetchBooks = async (dispatch, getState) => {
	try {
		const response = await fetch('http://localhost:9000/books');
		const books = await response.json();

		dispatch(loaded(books));

		console.log(`Number of books: ${getState().books.list.length}`);
	} catch (err) {
		console.log(err);
	}
};

export default fetchBooks;
