import { updatedBook } from '../actions';

const updateBook = (bookId, bookObject) => {
	return async (dispatch) => {
		try {
			const response = await fetch(`http://localhost:9000/books/${bookId}`, {
				method: 'PATCH',
				body: JSON.stringify(bookObject),
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				}
			});
			const book = await response.json();

			dispatch(updatedBook(book));
		} catch (err) {
			console.log(err);
		}
	};
};

export default updateBook;
