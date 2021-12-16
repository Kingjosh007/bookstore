import axios from 'axios';
import { booksEndpoint, deleteData, postData } from '../../utils/apiRelated';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOADING_BOOKS = 'bookStore/books/LOADING_BOOKS';
const SUCCESS = 'bookStore/books/SUCCESS';
const FAILURE = 'bookStore/books/FAILURE';

const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const getBooks = (dispatch) => {
  dispatch({ type: LOADING_BOOKS });
  axios.get(booksEndpoint)
    .then((res) => {
      let data = [];
      try {
        data = res.json();
      } catch (err) {
        data = [];
      }
      dispatch({ type: SUCCESS, payload: data });
    })
    .catch((err) => dispatch({ type: FAILURE, payload: err }));
};

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
    case LOADING_BOOKS:
    {
      return {
        ...state,
        books: [],
        loading: true,
        error: '',
      };
    }
    case SUCCESS:
    {
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: '',
      };
    }
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
