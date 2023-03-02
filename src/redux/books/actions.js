import { ADDED, EDIT, LOADED, UPDATED, DELETED, SEARCHING, FILTERING } from './actionTypes';
// all books action creator
export const loaded = (books) => {
	return {
		type: LOADED,
		payload: books
	};
};

export const added = (bookObject) => {
	return {
		type: ADDED,
		payload: bookObject
	};
};

export const editBook = (bookObject) => {
	return {
		type: EDIT,
		payload: bookObject
	};
};

export const updatedBook = (book) => {
	return {
		type: UPDATED,
		payload: book
	};
};

export const deletedBook = (bookId) => {
	return {
		type: DELETED,
		payload: bookId
	};
};

export const searchingBook = (value) => {
	return {
		type: SEARCHING,
		payload: value
	};
};

export const filteringBook = (value) => {
	return {
		type: FILTERING,
		payload: value
	};
};
