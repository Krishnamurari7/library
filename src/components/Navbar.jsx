import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="p-4 bg-blue-600 text-white flex justify-around">
    <Link to="/">Home</Link>
    <Link to="/books/Fiction">Browse Books</Link>
    <Link to="/add-book">Add Book</Link>
  </nav>
);

export default Navbar;