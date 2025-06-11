// Save auth token to localStorage
export const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

// Get auth token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Remove auth token from localStorage
export const removeAuthToken = () => {
  localStorage.removeItem('authToken');
};

// Check if user is logged in
export const isLoggedIn = () => {
  return !!getAuthToken();
};
