import { booksEndpoint, deleteData, getData, postData } from '../../utils/apiRelated';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_ALL_BOOKS = 'bookStore/books/GET_ALL_BOOKS';

const initialState = [];

export const getBooks = () => async (dispatch) => {
  let booksArr = await getData(booksEndpoint);
  dispatch({ type: GET_ALL_BOOKS, payload: booksArr });
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
    case GET_ALL_BOOKS:
    {
      return [...state, ...action.payload];
    }
    case ADD_BOOK:
    {
      axios.post(booksEndpoint, action.payload)
           .then((res) => dis 
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
