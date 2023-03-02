import { deletedBook } from '../actions';

const deleteBook = (bookId) => {
	return async (dispatch) => {
		try {
			await fetch(`http://localhost:9000/books/${bookId}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				}
			});
			dispatch(deletedBook(bookId));
		} catch (error) {
			console.log(error);
		}
	};
};

export default deleteBook;
