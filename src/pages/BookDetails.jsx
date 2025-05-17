import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useSelector((state) => state.books);
  const book = books.find((b) => b.id === id);

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{book.title}</h1>
      <p className="text-lg">by {book.author}</p>
      <p className="mt-2">{book.description}</p>
      <p className="mt-2">Rating: {book.rating}</p>
      <button onClick={() => navigate(-1)} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Back to Browse
      </button>
    </div>
  );
};

export default BookDetails;