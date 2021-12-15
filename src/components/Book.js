/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { book } = props;
  return (
    <li className="single-book">
      <div className="left-side">
        <div className="book-details">
          <div className="book-category">{book.category}</div>
          <div className="book-title">{book.title}</div>
          <div className="book-category">{book.author}</div>
        </div>
        <div className="book-buttons">
          <button type="button" className="comments-btn">Comments</button>
          <div className="separator">|</div>
          <button type="button" className="remove-btn">Remove</button>
          <div className="separator">|</div>
          <button type="button" className="edit-btn">Edit</button>
        </div>
      </div>
      <div className="middle-side">
        <div className="pctg-graphics" />
        <div className="pctg-text">
          <div className="pctg-value" />
          <div className="pctg-keyword">Completed</div>
        </div>
      </div>
      <div className="sides-separator" />
      <div className="right-side">
        <div className="current-text">Current chapter</div>
        <div className="current-value">{book.currentChapter}</div>
        <button type="button" className="">Update progress</button>
      </div>
    </li>
  );
};
export default Book;
