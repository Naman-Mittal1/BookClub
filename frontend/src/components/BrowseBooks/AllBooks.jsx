// BrowseBooks.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBooks } from "../../api/books";
import BookCard from "../BookCard/BookCard";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await getBooks();
        setBooks(res.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  return (
      <div className="">
        {books.map((book) => (
          <div className="mb-6" key={book._id}>
            <Link to={`/book/${book._id}`}>
              <BookCard book={book} />
            </Link>
          </div>
        ))}
      </div>
  );
};

export default AllBooks;
