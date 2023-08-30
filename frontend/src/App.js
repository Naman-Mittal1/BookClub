import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import Footer from './components/Footer/Footer'
import BrowseBooks from './components/BrowseBooks/BrowseBooks'
import BookDetails from './components/BookDetails/BookDetails'
import BookUpload from './components/BookUpload/BookUpload'

const App = () => {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/browse-books' element={<BrowseBooks/>} />
      <Route path='/book/:id' element={<BookDetails/>} />
      <Route path='/upload' element={<BookUpload/>} />
    </Routes>
    {/* <Footer /> */}
  </>    
  )
}

export default App