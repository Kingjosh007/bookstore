import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    id, title, author, category, handleDeleteProps,
  } = props;
  const elementId = `book${id}`;
  return (
    <li className="single-book" id={elementId}>
      <div className="left-side">
        <div className="book-details">
          <div className="book-category">{category}</div>
          <div className="book-title">{title}</div>
          <div className="book-category">{author}</div>
        </div>
        <div className="book-buttons">
          <button type="button" className="comments-btn">Comments</button>
          <div className="separator">|</div>
          <button
            type="button"
            className="remove-btn"
            onClick={() => handleDeleteProps(id)}
          >
            Remove
          </button>
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
        <div className="current-value">{17}</div>
        <button type="button" className="">Update progress</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleDeleteProps: PropTypes.func.isRequired,
};

export default Book;
