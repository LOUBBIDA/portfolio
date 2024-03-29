import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContextProvider from './Context/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
  <React.StrictMode>
    <ThemeContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ThemeContextProvider>
  </React.StrictMode>
  
);
 
