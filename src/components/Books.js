/* eslint-disable react/prop-types */
import React from 'react';
import Book from './Book';
import BookForm from './BookForm';

const Books = (props = { books: [] }) => {
  let { books } = props;
  if (!books) books = [];
  return (
    <>
      <ul className="listContainer">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>
      <BookForm />
    </>
  );
};

export default Books;
