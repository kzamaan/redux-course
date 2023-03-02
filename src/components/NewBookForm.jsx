import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../redux/books/actions';
import addBook from '../redux/books/thunk/addBook';
import updateBook from '../redux/books/thunk/updateBook';

export default function NewBookForm() {
	const dispatch = useDispatch();
	const { editableBook } = useSelector((state) => state.books);
	// define local state
	const [bookName, setBookName] = useState('');
	const [author, setAuthor] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [price, setPrice] = useState('');
	const [rating, setRating] = useState('');
	const [featured, setFeatureBook] = useState('');

	// after submit form reset all input field
	const bookResetHandler = () => {
		setBookName('');
		setAuthor('');
		setThumbnail('');
		setPrice('');
		setRating('');
		setFeatureBook('');
	};

	// update book handler
	const updateBookHandler = (bookId, bookObject) => {
		dispatch(updateBook(bookId, bookObject));
		dispatch(editBook({}));
	};

	// added book handler
	const addBookHandler = (e) => {
		e.preventDefault();

		const bookObject = {
			name: bookName,
			author,
			thumbnail,
			price,
			rating,
			featured: featured ? true : false
		};

		if (editableBook.id) {
			updateBookHandler(editableBook.id, bookObject);
		} else {
			dispatch(addBook(bookObject));
		}
		bookResetHandler();
	};

	// book edit use effect
	useEffect(() => {
		// if editableBook no empty then fill up book update form
		if (editableBook.id) {
			const { name, author, thumbnail, price, rating, featured } = editableBook;
			setBookName(name);
			setAuthor(author);
			setThumbnail(thumbnail);
			setPrice(price);
			setRating(rating);
			setFeatureBook(featured);
		}
	}, [editableBook]);

	return (
		<div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
			<h4 className="mb-8 text-xl font-bold text-center">{editableBook.id ? 'Update' : 'Add New'} Book</h4>
			<form className="book-form" onSubmit={addBookHandler}>
				<div className="space-y-2">
					<label htmlFor="name">Book Name</label>
					<input
						required
						className="text-input"
						type="text"
						id="input-Bookname"
						name="name"
						value={bookName}
						onChange={(e) => setBookName(e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="category">Author</label>
					<input
						required
						className="text-input"
						type="text"
						id="input-Bookauthor"
						name="author"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>

				<div className="space-y-2">
					<label htmlFor="image">Image Url</label>
					<input
						required
						className="text-input"
						type="text"
						id="input-Bookthumbnail"
						name="thumbnail"
						value={thumbnail}
						onChange={(e) => setThumbnail(e.target.value)}
					/>
				</div>

				<div className="grid grid-cols-2 gap-8 pb-4">
					<div className="space-y-2">
						<label htmlFor="price">Price</label>
						<input
							required
							className="text-input"
							type="number"
							id="input-Bookprice"
							name="price"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>

					<div className="space-y-2">
						<label htmlFor="quantity">Rating</label>
						<input
							required
							className="text-input"
							type="number"
							id="input-Bookrating"
							name="rating"
							min="1"
							max="5"
							value={rating}
							onChange={(e) => setRating(e.target.value)}
						/>
					</div>
				</div>

				<div className="flex items-center">
					<input
						id="input-BookFeatured"
						type="checkbox"
						name="featured"
						className="w-4 h-4"
						checked={featured}
						onChange={(e) => setFeatureBook(e.target.checked)}
					/>
					<label htmlFor="input-BookFeatured" className="ml-2 text-sm">
						This is a featured book
					</label>
				</div>

				<button type="submit" className="submit" id="submit">
					{editableBook.id ? 'Update' : 'Add'} Book
				</button>
			</form>
		</div>
	);
}
