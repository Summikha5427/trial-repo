// -----Action Creators

//Store Package
import { createStore , applyMiddleware} from "redux"; // createStore is the older usage for creating store, replaced by configureStore
import logger from 'redux-logger';

const inc = 'increment' ; 
const dec = 'decrement' ;
const incByAmt = 'incrementByAmount' ;

// Creating  a global Store
const store = createStore(reducer , applyMiddleware(logger.default)); //usnf default to avoid the applyMiddlware for the oldest version

//A variable to store History
const history = []; 

//Reducer Function to Perform Action
function reducer(state = { amount: 1 }, action) {
  if (action.type === inc) {
    //immutability
    return {amount : state.amount + 1};
  };
  if (action.type === dec) {
    //immutability
    return {amount : state.amount - 1};
  };
  if (action.type === incByAmt) {
    //immutability
    return {amount : state.amount + action.payload};
  }
  return state;
}

//Action Creation

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
    store.dispatch(increment());
  },5000);

  

