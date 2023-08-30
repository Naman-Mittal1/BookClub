import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "../shared/modals/LoginModal";
import RegisterModal from "../shared/modals/RegisterModal";

const Header = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isExploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setCommunityDropdownOpen] = useState(false);

  const openLoginModal = () => {
    setLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false);
  };

  const openRegisterModal = () => {
    setRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalOpen(false);
  };

  const toggleExploreDropdown = () => {
    setExploreDropdownOpen(!isExploreDropdownOpen);
  };

  const toggleCommunityDropdown = () => {
    setCommunityDropdownOpen(!isCommunityDropdownOpen);
  };

  const handleExploreMouseLeave = () => {
    setExploreDropdownOpen(false);
  };

  const handleCommunityMouseLeave = () => {
    setCommunityDropdownOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link
            to="/"
            className="text-2xl font-semibold items-center "
            style={{ fontFamily: "'Comic Neue', cursive" }}
          >
            BookClub
          </Link>
        </div>
        <nav className="flex space-x-8">
          <Link to="/browse-books" className="hover:text-gray-300">
            Browse Books
          </Link>
          <div
            className="relative group"
            onMouseEnter={toggleExploreDropdown}
            onMouseLeave={handleExploreMouseLeave}
          >
            <button className="hover:text-gray-300 focus:outline-none">
              Explore
            </button>
            {isExploreDropdownOpen && (
              <div className="absolute left-0 w-max mt-2 bg-gray-800 text-white p-4 z-10">
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <p className="font-semibold mb-2">Genres</p>
                    <Link
                      to="/browse-books"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Novel
                    </Link>
                    <Link
                      to="/browse-books"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Fiction
                    </Link>
                    <Link
                      to="/browse-books"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Science Fiction
                    </Link>
                    <Link
                      to="/browse-books"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Historical
                    </Link>
                    <Link
                      to="/browse-books"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Mystery
                    </Link>
                    <Link
                      to="/browse-books"
                      className="text-gray-300 hover:text-white"
                    >
                      List all...
                    </Link>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Books</p>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Top Books
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Most Popular
                    </Link>
                    <Link
                      to="/"
                      className="text-gray-300 hover:text-white block mb-1"
                    >
                      Newest
                    </Link>
                    <Link to="/" className="text-gray-300 hover:text-white">
                      Upcoming
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={toggleCommunityDropdown}
            onMouseLeave={handleCommunityMouseLeave}
          >
            <button className="hover:text-gray-300 focus:outline-none  hover:underline ">
              Community
            </button>
            {isCommunityDropdownOpen && (
              <div className="absolute left-0 w-max mt-2 bg-gray-800 text-white z-10">
                <Link
                  to="/browse-books"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 mt-2 p-4 py-2 block mb-1"
                >
                  List
                </Link>
                <Link
                  to="/browse-books"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 p-4 py-2 block mb-1"
                >
                  Forums
                </Link>
                <Link
                  to="/browse-books"
                  className="text-gray-300 hover:text-white hover:bg-gray-700 p-4 py-2 block mb-"
                >
                  Coins Leaderboard
                </Link>
              </div>
            )}
          </div>
          <Link to="/feeds" className="hover:text-gray-300">
            Feeds
          </Link>
          <Link to="/upload" className="hover:text-gray-300">
            Upload a book
          </Link>
        </nav>
        <div className="space-x-4">
          <button
            className="hover:bg-blue-800 text-white px-4 py-2 rounded-lg bg-blue-900"
            onClick={openLoginModal}
          >
            Login
          </button>
          <LoginModal
            isOpen={isLoginModalOpen}
            onRequestClose={closeLoginModal}
          />
          <button
            className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
            onClick={openRegisterModal}
          >
            Signup
          </button>
          <RegisterModal
            isOpen={isRegisterModalOpen}
            onRequestClose={closeRegisterModal}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
