// src/auth.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';  // Update with your backend URL

const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

const clearTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

export const login = async (username, password) => {
  const response = await axios.post(`${API_URL}/login/`, { username, password });
  if (response.data.access) {
    setTokens(response.data.access, response.data.refresh);
  }
  return response;
};

export const register = async (username, password, email) => {
  const response = await axios.post(`${API_URL}/register/`, { username, password, email });
  return response;
};

export const logout = () => {
  clearTokens();
  window.location.href = '/login'; // Redirect to login page after logout
};

export const getAccessToken = () => localStorage.getItem('access_token');
export const getRefreshToken = () => localStorage.getItem('refresh_token');
export const isAuthenticated = () => !!getAccessToken();
