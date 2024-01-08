//----Handling the reducer with the three states : pending, fulfilled , rejected

//Store Package
import { createStore, applyMiddleware, combineReducers } from "redux"; // createStore is the older usage for creating store, replaced by configureStore
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

//variable to get the stating amount when loaded ofr a particular user like eg: user1 prticular

// Creating  a global Store
const store = createStore(
  combineReducers({ 
    account: accountReducer, 
    bonus: bonusReducer 
  }),
  applyMiddleware(logger.default, thunk.default)
); 

//Setting a Varibale to perform a dispatch an action to the Store that is Increment s
setTimeout(() => {  
  store.dispatch(getUserAccount(2))
  // store.dispatch(incrementByAmount(500));  
}, 5000);
