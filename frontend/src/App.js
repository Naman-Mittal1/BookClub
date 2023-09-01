import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
// import Footer from './components/Footer/Footer';
import BrowseBooks from './components/BrowseBooks/BrowseBooks';
import BookDetails from './components/BookDetails/BookDetails';
import BookUpload from './components/BookUpload/BookUpload';
import { useCookies } from 'react-cookie';
// import ProfilePage from './components/ProfilePage/ProfilePage';

const App = () => {
 const [cookies,] = useCookies(["access_token"])

  const ProtectedRoute = ({ element }) => {
    if (!cookies.access_token) {
      alert("You need to Login!")
      return <Navigate to="/" />;
      
    }
    return element;
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse-books" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/upload" element={<ProtectedRoute element={<BookUpload />} />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
