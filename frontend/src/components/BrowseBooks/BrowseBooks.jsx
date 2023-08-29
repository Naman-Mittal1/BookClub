// BrowseBooks.jsx
import React, { useState, useEffect } from 'react';
import { getBooks } from '../../api/books';
import BookCard from '../BookCard/BookCard';
import Searchbar from '../shared/Searchbar/Searchbar';

const BrowseBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks();
        setBooks(res.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <Searchbar />
      
      <div className="">
        {books.map(book => (
          <div className="mb-6">
            <BookCard key={book._id} book={book} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooks;