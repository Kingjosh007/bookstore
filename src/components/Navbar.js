import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-logo">Bookstore</h1>
    <ul>
      <li>
        <Link to="/" className="nav-link active">Books</Link>
      </li>
      <li>
        <Link to="/categories" className="nav-link">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
