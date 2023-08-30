
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})


export const getBooks = async () => {
    try {
      const response = await api.get('/books');
      return response.data;
      
    } catch (error) {
      console.log(error);
      throw error; 
    }
}

export const getBook = async (bookId) => {
  try {
    const response = await api.get(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const addBook = async bookData  => {
  try {
    const response = await api.post(`/books`, bookData );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const searchBooks = async query => {
  try {
    const response = await api.get('/books', {
      params: {
        search: query
      }
    });
    console.log(response.data)
    return response.data; // Return the entire response data
  } catch (error) {
    throw error;
  }
};