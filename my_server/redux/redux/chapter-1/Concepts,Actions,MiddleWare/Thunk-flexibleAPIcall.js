
// ----Thunk - Flexible API call 
// json-server debugger.json has to be running

//Store Package
import { createStore , applyMiddleware} from "redux"; // createStore is the older usage for creating store, replaced by configureStore
import logger from 'redux-logger';
import axios from 'axios';
import thunk from 'redux-thunk';

//variable to get the stating amount when loaded ofr a particular user like eg: user1 prticular 
const init = 'init';
const inc = 'increment' ; 
const dec = 'decrement' ;
const incByAmt = 'incrementByAmount' ;

// Creating  a global Store
const store = createStore(reducer , applyMiddleware(logger.default , thunk.default)); //usnf default to avoid the applyMiddlware for the oldest version

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

//ActionCreation

//Making it a Thunk middle Ware Action creator by passing two parameters 
function getUser(id){
  return async (dispatch,getState) => {
  const {data} = await axios.get(`http://localhost:3000/accounts/${id}`)
  dispatch(initUser(data.amount)); // hoisting is performed for initUser
}
};

function initUser(value){
 return {type:init,payload:value}
};

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
setTimeout(()=>{
    store.dispatch(getUser(2));
  },5000);


