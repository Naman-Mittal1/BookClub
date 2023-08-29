import React from 'react'
import Header from './components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Footer from './components/Footer/Footer'
import BrowseBooks from './components/BrowseBooks/BrowseBooks'

const App = () => {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/browse-books' element={<BrowseBooks/>} />
    </Routes>
    <Footer />
  </>    
  )
}

export default App