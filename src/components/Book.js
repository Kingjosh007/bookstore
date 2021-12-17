import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { getBooks } from '../redux/books/books';

const Book = (props) => {
  const {
    itemId, title, author, category, handleDeleteProps,
  } = props;
  const elementId = `book${itemId}`;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const randomPctg = Math.floor(Math.random() * 100);
  const chaptersCompleted = Math.round(25 * (randomPctg / 100));

  return (
    <li className="single-book" id={elementId}>
      <div className="left-side">
        <div className="book-details">
          <div className="book-category">{category}</div>
          <div className="book-title">{title}</div>
          <div className="book-author">{author}</div>
        </div>
        <div className="book-buttons">
          <button type="button" className="comments-btn">Comments</button>
          <div className="separator">|</div>
          <button
            type="button"
            className="remove-btn"
            onClick={() => handleDeleteProps(itemId)}
          >
            Remove
          </button>
          <div className="separator">|</div>
          <button type="button" className="edit-btn">Edit</button>
        </div>
      </div>
      <div className="middle-side">
        <div className="pctg-graphics">
          <Progress
            type="circle"
            percent={randomPctg}
            width={70}
          />
        </div>
        <div className="pctg-text">
          <div className="pctg-value">
            {randomPctg}
            %
          </div>
          <div className="pctg-keyword">Completed</div>
        </div>
      </div>
      <div className="sides-separator" />
      <div className="right-side">
        <div className="current-text">Current chapter</div>
        <div className="current-value">
          Chapter
          <span className="cv-pctg">
            {chaptersCompleted}
          </span>
        </div>
        <button type="button" className="update-prog-btn">Update progress</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  itemId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  handleDeleteProps: PropTypes.func.isRequired,
};

export default Book;
