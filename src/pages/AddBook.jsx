import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice.js';
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: '', author: '', description: '', category: '', rating: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, author, description, category, rating } = form;
    if (!title || !author || !description || !category || !rating) return alert('All fields required');
    dispatch(addBook({ title, author, description, category, rating: parseFloat(rating) }));
    navigate(`/books/${category}`);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-4">
      <input name="title" placeholder="Title" value={form.title} onChange={handleChange} className="border p-2" />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} className="border p-2" />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="border p-2" />
      <input name="category" placeholder="Category" value={form.category} onChange={handleChange} className="border p-2" />
      <input name="rating" type="number" step="0.1" placeholder="Rating" value={form.rating} onChange={handleChange} className="border p-2" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Add Book</button>
    </form>
  );
};

export default AddBook;