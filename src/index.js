import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const domnode = document.getElementById('root');
const root = createRoot(domnode);
root.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>,
);
