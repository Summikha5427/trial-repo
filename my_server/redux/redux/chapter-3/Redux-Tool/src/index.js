import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice'
import { configureStore } from '@reduxjs/toolkit';

// Creating  a global Store using redux-toolkit
  // --we need toolkit , provider

const store = configureStore({
  reducer:{
    account:accountReducer,
    bonus:bonusReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <App/>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();

