
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

export const searchBooks = async (query) => {
  try {
    const response = await axios.get('http://localhost:5000/api/books', {
      params: {
        search: query
      }
    });
    return response.data;
  } catch (error) {
    throw error; 
  }
};
