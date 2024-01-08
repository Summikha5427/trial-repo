//----Multiple Reducer
  // using Multiple Reducer helps in less code complexlitly, clean & simple , can store more data 

//Store Package
import { createStore, applyMiddleware, combineReducers } from "redux"; // createStore is the older usage for creating store, replaced by configureStore
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

//variable to get the stating amount when loaded ofr a particular user like eg: user1 prticular
const init = "account/init";
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const incBonus = "bonus/increment";


// Creating  a global Store
const store = createStore(
  combineReducers({ 
    account: accountReducer, 
    bonus: bonusReducer 
  }),
  applyMiddleware(logger.default, thunk.default)
); //usnf default to avoid the applyMiddlware for the oldest version

//Reducer Function to Perform Action
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case init:
      return { amount: action.payload };
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

function bonusReducer(state = { points: 0 }, action) {
  switch (action.type) {

    case incBonus:
      return { points : state.points + 1 }
    // case inc:
    //   return { bonus: state.points + 1 };
    //using different case to visualize the same name conflicts 

    // ------Extra cases: This is an extra case as beong in the bonus reducer it is checking the accountReducer and effecting the bonusReducer
    // case incBonus:
    //   return { points: state.points + 1 }

    case incByAmt:
      if(action.payload >= 100){
        return { points : state.points + 1 }
      };

    default:
      return state;  //a small state in a reducer
  }
}

//ActionCreation

//Making it a Thunk middle Ware Action creator by passing two parameters
function getUser(id) {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    dispatch(initUser(data.amount)); // hoisting is performed for initUser
  };
}

function initUser(value) {
  return { type: init, payload: value };
}

function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function increment(){
  return {type: incBonus};
}

function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}

//Setting a Varibale to perform a dispatch an action to the Store that is Increment s
setTimeout(() => {
  // store.dispatch(getUser(2));  // gets the disptahc function
  store.dispatch(incrementByAmount(200));  // gets increment for both the reducers as the action name is same fot bote actions "inc". we need to serperate the action name with the reducers name as rarely we need to increase both at the same time.
}, 5000);
