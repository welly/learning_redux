import { combineReducers } from 'redux';
import ActiveBook from './reducer_activebook';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
	activeBook: ActiveBook,
	books: BooksReducer
});

export default rootReducer;
