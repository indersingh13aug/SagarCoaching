import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // ✅ Should match file name (App.jsx)
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
