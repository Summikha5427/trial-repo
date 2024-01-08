import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import { Provider } from 'react-redux';
import accountReducer from './slices/accountSlice';
import bonusReducer from './slices/bonusSlice'
import { configureStore } from '@reduxjs/toolkit';
import rewardReducer from './reducers/reward';
import { adminApi } from './api/adminSlice';

// Creating  a global Store using redux-toolkit
  // --we need toolkit , provider

const store = configureStore({
  reducer:{
    account:accountReducer,  //SLiceReducers
    bonus:bonusReducer,      //SlceReducers
    reward:rewardReducer,    //Custom Reducers using "createReducers,createActions".
    [adminApi.reducerPath] : adminApi.reducer //RTK-Query,key only get thw value with [], otherwise it is just considerred as a string
  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(adminApi.middleware),
});

// RTK-Query requires a middleware to perform the caching and other functionalities
//----Adding a middleware upwards which is also created in this redux-api(if any middleware is needed to be added then
//this is the way it has to be done),to connnect 
//---"getDefaultMiddleware" => to get the all the middleware is feteched by this
//--"concat" => all the middleware is concat and a new state of array is created 
//here we are calling the middleware , a new array is created which is then concat with the "adminApi" middleware

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}> 
      <App/>
    </Provider>
  </React.StrictMode>
);


