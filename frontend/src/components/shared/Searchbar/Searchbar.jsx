import React, { useState } from 'react';
import { searchBooks } from '../../../api/books';
import { BsSearch } from 'react-icons/bs';

const Searchbar = (query) => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      console.log('Search query:', search);
      const response = await searchBooks(search);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-20">
      <h1 className="text-5xl mb-3 font-semibold text-slate-300" style={{ fontFamily: "'Comic Neue', cursive" }}>
        BookClub
      </h1>
      <p className="text-lg text-slate-400 max-w-md text-center mb-8">
        The world's largest ebook club and library
      </p>
      <form className="w-full max-w-4xl" onSubmit={handleSearch}>
        <div className="relative flex items-center bg-white rounded-xl overflow-hidden shadow-md h-12">
          <input
            type="text"
            placeholder="Search books, topics, authors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full py-3 px-6"
          />
          <button
            className="absolute right-0 p-3 text-gray-500 hover:text-blue-500" type='submit'
          >
            <BsSearch size={22} />
          </button>
        </div>
      </form>
      <div className="mt-4">
  {searchResults.map(book => (
    <div key={book._id} className="bg-white p-3 rounded-lg shadow-md mb-2">
      <h3 className="text-lg font-semibold">{book.title}</h3>
      <p className="text-gray-600">{book.author}</p>
    </div>
  ))}
</div>
    </div>
  );
};

export default Searchbar;