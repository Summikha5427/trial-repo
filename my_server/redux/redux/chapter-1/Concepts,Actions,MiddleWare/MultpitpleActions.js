// -----Multiple Actions


//Store Package
import { createStore , applyMiddleware} from "redux"; // createStore is the older usage for creating store, replaced by configureStore
import logger from 'redux-logger';

// Creating  a global Store
const store = createStore(reducer , applyMiddleware(logger.default)); //usnf default to avoid the applyMiddlware for the oldest version

//A variable to store History
const history = []; 

//Reducer Function to Perform Action
function reducer(state = { amount: 1 }, action) {
  if (action.type === "increment") {
    //immutability
    return {amount : state.amount + 1};
  };
  if (action.type === "decrement") {
    //immutability
    return {amount : state.amount - 1};
  };
  if (action.type === "incrementByAmount") {
    //immutability
    return {amount : state.amount + action.payload};
  }
  return state;
}
//Setting a Varibale to perform a dispatch an action to the Store that is Increment s
setInterval(()=>{
    store.dispatch({ type:'incrementByAmount' , payload:4});
  },5000);

  

