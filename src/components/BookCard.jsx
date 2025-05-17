import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => (
  <div className="border p-4 rounded shadow-md">
    <h2 className="font-bold text-lg">{book.title}</h2>
    <p>by {book.author}</p>
    <Link to={`/book/${book.id}`} className="text-blue-500">View Details</Link>
  </div>
);

export default BookCard;