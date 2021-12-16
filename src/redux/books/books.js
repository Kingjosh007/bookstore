import { booksEndpoint, deleteData, postData } from '../../utils/apiRelated';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOADING_BOOKS = 'bookStore/books/LOADING_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
    {
      postData(booksEndpoint, action.payload);
      return [...state, action.payload];
    }
    case REMOVE_BOOK:
    {
      deleteData(action.payload.id);
      return [...state.filter((book) => book.id !== action.payload)];
    }

    default:
      return state;
  }
};

export default reducer;
