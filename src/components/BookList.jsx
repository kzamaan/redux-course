import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchBooks from '../redux/books/thunk/fetchBooks';
import BookCard from './BookCard';

export default function BookList() {
	const dispatch = useDispatch();
	const { list, searchKey, category } = useSelector((state) => state.books);

	const [bookList, setBookList] = useState([]);

	// fetch books by use effect
	useEffect(() => {
		dispatch(fetchBooks);
	}, [dispatch]);

	// book searching and filtering by featured or all books
	useEffect(() => {
		// category filter
		const filterBooks = list.filter((book) => {
			if (category === 'featured') {
				return book.featured;
			}
			return book;
		});

		// search filter
		const searchBook = filterBooks.filter((book) => {
			if (searchKey) {
				return book.name.toLowerCase().includes(searchKey.toLowerCase());
			}
			return book;
		});

		setBookList(searchBook);
	}, [list, category, searchKey]);

	return (
		<div className="lws-bookContainer">
			{bookList.length > 0 ? (
				bookList.map((book) => <BookCard key={book.id} book={book} />)
			) : (
				<div>No book found!</div>
			)}
		</div>
	);
}
