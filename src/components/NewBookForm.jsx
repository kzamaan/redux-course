import { useState } from 'react';

export default function NewBookForm() {
	// define local state
	const [bookName, setBookName] = useState('');
	const [author, setAuthor] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [price, setPrice] = useState('');
	const [rating, setRating] = useState('');
	const [featured, setFeatureBook] = useState('');

	const addBookHandler = (e) => {
		e.preventDefault();
		console.log({
			bookName,
			author,
			imageUrl,
			price,
			rating,
			featured
		});
	};

	return (
		<div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
			<h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
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
						value={imageUrl}
						onChange={(e) => setImageUrl(e.target.value)}
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
					Add Book
				</button>
			</form>
		</div>
	);
}
