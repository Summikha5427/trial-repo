//----Handling the reducer with the three states : pending, fulfilled , rejected

//Store Package
import { createStore, applyMiddleware, combineReducers } from "redux"; // createStore is the older usage for creating store, replaced by configureStore
import logger from "redux-logger";
import axios from "axios";
import thunk from "redux-thunk";

//variable to get the stating amount when loaded ofr a particular user like eg: user1 prticular

// const init = "account/init"; not using it further as one of the three states has this property
const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const getAccUserPen= "account/getUser/pending";
const getAccUserFul = "account/getUser/fulfilled";
const getAccUserRej= "account/getUser/rejected";
const incBonus = "bonus/incrementByAmount";

// Creating  a global Store
const store = createStore(
  combineReducers({ 
    account: accountReducer, 
    bonus: bonusReducer 
  }),
  applyMiddleware(logger.default, thunk.default)
); 

// -----Actions- The many actions , those many creators

//Reducer Function to Perform Action
function accountReducer(state = { amount: 1 }, action) {
  switch (action.type) {
    case getAccUserFul:
      return { amount: action.payload , pending : false };
    case getAccUserRej:
      return {...state,error:action.error , pending : false};
    case getAccUserPen:
      return { ...state , pending : true};
    // case init:
    //   return { amount: action.payload };
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
      return { points : state.points + 1}
    case incByAmt:
      if(action.payload >= 100){
        return { points : state.points + 1 }
      };
    default:
      return state;  
  }
}

//ActionCreators

//Making it a Thunk middle Ware Action creator by passing two parameters
//passing 3 action in the thunk middleware for proper case handling
function getUserAccount(id) {
    return async (dispatch, getState) => {
      try{
          dispatch(getAccountUserPending());
          const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
           dispatch(getAccountUserFulFilled(data.amount));
      }catch(error){
        dispatch(getAccountUserRejected(error.message));
      }
  }
};

function getAccountUserFulFilled(value) {
  return { type: getAccUserFul, payload: value };
};

function getAccountUserRejected(error) {
  return { type: getAccUserRej, error: error };
};

function getAccountUserPending() {
  return { type: getAccUserPen };
};

function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}

function incrementByBonus(){
  return {type: incBonus}
}
function incrementByAmount(value) {
  return { type: incByAmt, payload: value };
}

//Setting a Varibale to perform a dispatch an action to the Store that is Increment s
setTimeout(() => {  
  store.dispatch(getUserAccount(2))
  // store.dispatch(incrementByAmount(500));  
}, 5000);
