import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './components/App';

// Basic index file creates the root DOM element so that the App component can be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

