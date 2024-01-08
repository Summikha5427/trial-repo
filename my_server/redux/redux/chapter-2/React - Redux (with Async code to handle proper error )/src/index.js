import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {bonusReducer} from './reducers/bonus';
import {accountReducer} from './reducers/account';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';



//creating Store on the higest level  "index.js" of the main application
// Creating  a global Store
const store = createStore(
  combineReducers({ 
    account: accountReducer, 
    bonus: bonusReducer 
  }),
  applyMiddleware(logger, thunk)
); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

