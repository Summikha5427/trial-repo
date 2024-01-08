import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { Provider } from 'react-redux';
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice'
import { configureStore } from '@reduxjs/toolkit';
import rewardReducer from './reducers/reward';

// Creating  a global Store using redux-toolkit
  // --we need toolkit , provider

const store = configureStore({
  reducer:{
    account:accountReducer,  //SLiceReducers
    bonus:bonusReducer,      //SlceReducers
    reward:rewardReducer    //Custom Reducers using "createReducers,createActions".
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

