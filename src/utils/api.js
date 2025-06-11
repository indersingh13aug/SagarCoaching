// axios config
import axios from 'axios';

// ✅ Set your backend API base URL here
const BASE_URL = 'http://localhost:5000/api'; // Update if hosted elsewhere

// 🔧 Create an axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 📥 GET Request
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('GET error:', error);
    throw error;
  }
};

// 📤 POST Request
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST error:', error);
    throw error;
  }
};

// ✏️ PUT Request
export const updateData = async (endpoint, data) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('PUT error:', error);
    throw error;
  }
};

// ❌ DELETE Request
export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE error:', error);
    throw error;
  }
};

export default api;
