// src/features/auth/AuthAPI.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Adjust the base URL accordingly

export const login = async (mobileNumber, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, { mobileNumber, password });
    debugger;
    return response.data;
  } catch (error) {
    throw error.response.data.error;
  }
};
