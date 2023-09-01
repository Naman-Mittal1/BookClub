import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {useCookies} from "react-cookie"
import AuthModal from "./AuthModal";
import RequestModal from "./RequestModal";

const Header = () => {

  const [isExploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  const [cookies, setCookies] = useCookies(["access_token"])

  const navigate = useNavigate();

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

  const logout = () =>{
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate("/")
  }

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
            <Link to="/explore" className="hover:text-gray-300 focus:outline-none">
              Explore
            </Link>
            {/* {isExploreDropdownOpen && (
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
            )} */}
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
                  Club Coins Leaderboard
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
        <div className=" flex gap-6">
        {!cookies.access_token? '' : <RequestModal /> }
        {!cookies.access_token? <AuthModal /> : <button className="bg-blue-800 hover:bg-blue-600 text-sm font-bold py-2 px-4 rounded" onClick={logout}>LogOut</button>}
        </div>
       
      </div>
    </header>
  );
};
export default Header;
