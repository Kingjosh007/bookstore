import {
  booksEndpoint, deleteData, getData, postData,
} from '../../utils/apiRelated';

const GET_ALL_BOOKS = 'bookStore/books/GET_ALL_BOOKS';
const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const getBooks = () => async (dispatch) => {
  const booksArr = await getData(booksEndpoint);
  dispatch({ type: GET_ALL_BOOKS, payload: booksArr });
};

export const addBook = (payload) => async (dispatch) => {
  await postData(booksEndpoint, payload);
  dispatch({ type: ADD_BOOK, payload });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteData(payload);
  dispatch({ type: REMOVE_BOOK, payload });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
    {
      return [...action.payload];
    }
    case ADD_BOOK:
    {
      return [...state, action.payload];
    }
    case REMOVE_BOOK:
    {
      return [...state.filter((book) => book.item_id !== action.payload)];
    }

    default:
      return state;
  }
};

export default reducer;
