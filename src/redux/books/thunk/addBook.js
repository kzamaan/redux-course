import { added } from '../actions';

const addBook = (bookObject) => {
	return async (dispatch) => {
		try {
			const response = await fetch('http://localhost:9000/books', {
				method: 'POST',
				body: JSON.stringify(bookObject),
				headers: {
					'Content-Type': 'application/json; charset=UTF-8'
				}
			});
			const book = await response.json();

			dispatch(added(book));
		} catch (err) {
			console.log(err);
		}
	};
};

export default addBook;
