import React from 'react';

const BookForm = () => (
  <div className="add-book-form">
    <h3>ADD NEW BOOK</h3>
    <form>
      <input type="text" placeholder="Book title" />
      <select name="Category">
        <option value="">Category</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>

);
export default BookForm;
