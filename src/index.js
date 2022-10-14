import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {MovieApp} from './MovieApp';
import {BrowserRouter} from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieApp />
    </BrowserRouter>
  </React.StrictMode>
);

