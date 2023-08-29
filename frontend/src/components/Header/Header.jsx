import React, {useState} from 'react';
import { Link } from 'react-router-dom'; 
import LoginModal from '../shared/modals/LoginModal';
import RegisterModal from '../shared/modals/RegisterModal';

const Header = () => {

  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

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

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <span className='text-2xl font-semibold items-center ' style={{fontFamily: "'Comic Neue', cursive"}}>BookClub</span>
        </div>
        <nav className="flex space-x-8">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/browse-books" className="hover:text-gray-300">Browse Books</Link>
          <Link to="/activity-feed" className="hover:text-gray-300">Activity Feed</Link>
          <Link to="/chat" className="hover:text-gray-300">Chat</Link>
          <Link to="/profile" className="hover:text-gray-300">Profile</Link>
        </nav>
        <div className="space-x-4">
          <button className=" hover:bg-blue-800 text-white px-4 py-2 rounded-lg bg-blue-900" onClick={openLoginModal}>
            Login
          </button>
          <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg" onClick={openRegisterModal}>
            Signup
          </button>
          <RegisterModal isOpen={isRegisterModalOpen} onRequestClose={closeRegisterModal} />
        </div>
      </div>
    </header>
  );
};

export default Header;
