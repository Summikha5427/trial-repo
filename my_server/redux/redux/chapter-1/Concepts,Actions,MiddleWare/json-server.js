// -----Server -Async function API call

// ------------
//fake api json-server Creation: 

/*npm i -g json-server

--Command to run the json server
    ===> json-server db.json
    
--Click the link provided by the json-server , if needed single account can be called using id

--run the axios after installing in the different new terminal 
 by ==> install i axios

*/


//---------------

//Store Package
import { createStore , applyMiddleware} from "redux"; // createStore is the older usage for creating store, replaced by configureStore
import logger from 'redux-logger';
import axios from 'axios';

//variable to get the stating amount when loaded ofr a particular user like eg: user1 prticular 
const init = 'init';
const inc = 'increment' ; 
const dec = 'decrement' ;
const incByAmt = 'incrementByAmount' ;

// Creating  a global Store
const store = createStore(reducer , applyMiddleware(logger.default)); //usnf default to avoid the applyMiddlware for the oldest version

//A variable to store History
const history = []; 

//Reducer Function to Perform Action
function reducer(state = { amount: 1 }, action) {
  switch(action.type){
    case init:
       return {amount : action.payload}
    case inc:
       return {amount : state.amount + 1};
    case dec:
       return {amount : state.amount - 1};
    case incByAmt:
      return {amount : state.amount + action.payload};
    default: 
      return state;
  };
 
}

//Action Creation

function initUser(value){
  return {type:init,payload:value}
}
function increment(){
  return {type:inc}
};

function decrement(){
  return {type:dec}
};

function incrementByAmount(value){
  return {type:incByAmt ,payload:value}
};

//Setting a Varibale to perform a dispatch an action to the Store that is Increment s
setInterval(()=>{
    store.dispatch(initUser(100));
  },5000);

  

