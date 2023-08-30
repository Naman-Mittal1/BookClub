import React, { useState } from 'react';
import { addBook } from '../../api/books';

const BookUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    image: '',
    year: ''
  });

 
  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
        await addBook(formData);  
        alert('Book added successfully');
        setFormData({
          title: '',
          author: '',
          genre: '',
          description: '',
          image: '',
          year: ''
        });
      } catch (error) {
        console.error('Error:', error);
        alert('Error adding book');
      }
    };

  return (
    <div className="bg-dark h-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-white text-2xl mb-4">Add New Book</h2>
        <form onSubmit={handleSubmit}>
          <label className="text-white">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          />

          <label className="text-white">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          />

          <label className="text-white">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          />

          <label className="text-white">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          ></textarea>

          <label className="text-white">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-2 text-white"
            required
          />

          <label className="text-white">Year</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full bg-gray-700 rounded-md p-2 mb-4 text-white"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookUpload;


