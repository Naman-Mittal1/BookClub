// BookDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../api/books';
import AddComment from '../AddComment/AddComment';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        console.log('Fetching book with ID:', id);
        const { data } = await getBook(id);
        console.log('Fetched book data:', data);

        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBookData();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white shadow-md rounded-lg mx-auto my-10 p-6 max-w-7xl">
      <div className='flex'>
        <img src={book.image} alt={book.title} className=" rounded mr-6" />
        <div>
          <h2 className="text-4xl font-semibold mb-4">{book.title}</h2>
          <p className="text-gray-300 mb-10">{book.author}</p>
          <p className="text-gray-300 mb-1">Genre: {book.genre}</p>
          <p className="text-gray-300 mb-1">Year: {book.year}</p>
          <p className="text-gray-300 mb-4 max-w-2xl">Description: {book.description}</p>
          <a href={book.downloadLink} className="text-blue-500 underline mb-4 block">
            Download Book
          </a>

        </div>
      </div>
      <AddComment />
    </div>
  );
}

export default BookDetails;
