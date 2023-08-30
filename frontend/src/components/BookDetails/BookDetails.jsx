// BookDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBook } from '../../api/books';

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

  // Hardcoded comments for demonstration
  const comments = [
    {
      username: 'User123',
      timestamp: '8 months ago',
      comment: 'This book was amazing! Highly recommended.',
    },
    {
      username: 'BookLover22',
      timestamp: '7 months ago',
      comment: "I couldn't put it down. A must-read.",
    },
    {
      username: 'MysteryFanatic',
      timestamp: '6 months ago',
      comment: 'The plot twists kept me on the edge of my seat.',
    },
  ];

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
      <div>
      <div className="mt-10 pt-4">
            <h3 className="text-2xl font-semibold border-b border-gray-700 pb-4  mb-5">Comments</h3>
            <ul className="">
              {comments.map((comment, index) => (
                <li key={index} className="py-5">
                  <p className="text-gray-400">
                    <span className="font-semibold">{comment.username} - </span>
                    <span className="text-gray-600">{comment.timestamp}</span>
                  </p>
                  <p className="text-gray-100">{comment.comment}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
          <textarea
      placeholder="Add a comment..."
      className="form-input py-4 focus:outline-none px-4 block w-full sm:text-base text-lg bg-gray-800 text-gray-200 border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500"
      rows="3" // Set the number of visible rows
    ></textarea>
            <button className="mt-4 bg-blue-900 text-white py-2 px-4 my-5 rounded hover:bg-blue-800">
              Comment
            </button>
          </div>
      </div>
    </div>
  );
}

export default BookDetails;
