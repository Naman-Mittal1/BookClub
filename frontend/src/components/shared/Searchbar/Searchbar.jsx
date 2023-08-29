import React, { useState, useEffect } from 'react';
import { useDebounce } from 'react-use';
import { searchBooks } from '../../../api/books';
import { BsSearch } from 'react-icons/bs';

const Searchbar = (query) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500); 
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (debouncedSearch.trim() === '') {
          setSearchResults([]);
          return;
        }

        const response = await searchBooks(debouncedSearch);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error searching books:', error);
      }
    };

    fetchBooks();
  }, [debouncedSearch]);

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <h1 className="text-5xl mb-3 font-semibold text-slate-300" style={{ fontFamily: "'Comic Neue', cursive" }}>
        BookClub
      </h1>
      <p className="text-lg text-slate-400 max-w-md text-center mb-8">
        The world's largest ebook club and library
      </p>
      <div className="w-full max-w-4xl">
        <div className="relative flex items-center bg-white rounded-xl overflow-hidden shadow-md h-12">
          <input
            type="text"
            placeholder="Search books, topics, authors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 px-6"
          />
          <button className="absolute right-0 p-3 text-gray-500 hover:text-blue-500">
            <BsSearch size={22} />
          </button>
        </div>
      </div>
      <div className="mt-4">
        {searchResults.map(book => (
          <div key={book._id} className="text-gray-700">
            {book.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
