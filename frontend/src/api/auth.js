
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export const registerUser = async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  
  export const loginUser = async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  
  export const logoutUser = async () => {
    try {
      const response = await api.delete('/auth/logout');
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };