import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getBooks } from '../redux/books/books';

const BookForm = (props) => {
  const { addBookProps } = props;
  const defaultCategory = 'Uncategorized';

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const [state, setState] = useState({
    title: '',
    author: '',
    category: defaultCategory,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.title.trim() && state.author.trim() && state.category.trim()) {
      addBookProps(state.title, state.author, state.category);
      setState({
        title: '',
        author: '',
        category: defaultCategory,
      });
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-book-form">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Book title"
          onChange={handleChange}
          value={state.title}
        />

        <input
          name="author"
          type="text"
          placeholder="Author's name"
          onChange={handleChange}
          value={state.author}
        />
        <select
          name="category"
          onChange={handleChange}
        >

          <option key="Uncategorized" value="Uncategorized" defaultValue={defaultCategory}>Uncategorized</option>
          <option key="Action" value="Action">Action</option>
          <option key="Economy" value="Economy">Economy</option>
          <option key="Novel" value="Novel">Novel</option>
          <option key="Science Fiction" value="Science Fiction">Science Fiction</option>

        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBookProps: PropTypes.func.isRequired,
};
export default BookForm;
