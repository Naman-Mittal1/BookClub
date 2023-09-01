import React from 'react';

const RandomBookCard = ({ book }) => {
  return (
    <div className="py-4 rounded-md shadow-md flex flex-col items-center">
      <img 
        src={book.image} 
        alt={book.title}
        className="w-32 h-32 sm:w-48 sm:h-auto object-cover rounded"
      />
    </div>
  );
}

export default RandomBookCard;
