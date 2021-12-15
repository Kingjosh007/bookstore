import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/books';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  const addBookToStore = (title, author, category) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  const deleteBookFromStore = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <ul className="listContainer">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
            handleDeleteProps={deleteBookFromStore}
          />
        ))}
      </ul>
      <BookForm addBookProps={addBookToStore} />
    </>
  );
};

Books.propTypes = {};

export default Books;
