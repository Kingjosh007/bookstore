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
      <hr />
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          name="title"
          type="text"
          className="title-input"
          placeholder="Book title"
          onChange={handleChange}
          value={state.title}
        />

        <input
          name="author"
          type="text"
          className="author-input"
          placeholder="Author's name"
          onChange={handleChange}
          value={state.author}
        />
        <select
          name="category"
          className="category-select"
          onChange={handleChange}
        >

          <option key="Uncategorized" value="Uncategorized" defaultValue={defaultCategory}>Uncategorized</option>
          <option key="Action" value="Action">Action</option>
          <option key="Action and Adventure" value="Action and Adventure">Action and Adventure</option>
          <option key="Classics" value="Classics">Classics</option>
          <option key="Comic Book" value="Comic Book">Comic Book</option>
          <option key="Cookbooks" value="Cookbooks">Cookbooks</option>
          <option key="Detective and Mystery" value="Detective and Mystery">Detective and Mystery</option>
          <option key="Economy" value="Economy">Economy</option>
          <option key="Fantasy" value="Fantasy">Fantasy</option>
          <option key="Graphic Novel" value="Graphic Novel">Graphic Novel</option>
          <option key="Historical Fiction" value="Historical Fiction">Historical Fiction</option>
          <option key="Horror" value="Horror">History</option>
          <option key="Literary Fiction" value="Literary Fiction">Literary Fiction</option>
          <option key="Novel" value="Novel">Novel</option>
          <option key="Romance" value="Romance">Romance</option>
          <option key="Science Fiction" value="Science Fiction">Science Fiction</option>
          <option key="Short Stories" value="Short Stories">Short Stories</option>
          <option key="Suspense and Thrillers" value="Suspense and Thrillers">Suspense and Thrillers</option>

        </select>
        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  addBookProps: PropTypes.func.isRequired,
};
export default BookForm;
