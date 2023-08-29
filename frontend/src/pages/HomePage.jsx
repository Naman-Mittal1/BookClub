// HomePage.jsx

import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

const HomePage = () => {

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    // Submit search query
  }

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">

<h1 className='text-5xl mb-3 font-semibold items-center  text-slate-300 ' style={{fontFamily: "'Comic Neue', cursive"}}>BookClub</h1>

      <p className="text-lg text-slate-400 max-w-md text-center mb-8">
        The world's largest ebook club and library
      </p>

      <div className="w-full max-w-3xl">
        <div className="relative flex items-center bg-white rounded-xl overflow-hidden shadow-md h-12">
          
          <input 
            type="text"
            placeholder="Search books, topics, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            className="w-full py-3 px-6"
          />

          <button
            className="absolute right-0 p-3 text-gray-500 hover:text-blue-500"
            onClick={handleSearch}  
          >
            <BsSearch size={22} />
          </button>

        </div>
      </div>

    </div>
  )
}

export default HomePage;