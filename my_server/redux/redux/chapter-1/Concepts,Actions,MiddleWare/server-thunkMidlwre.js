//---------------Thnuk Middleware:
// In Redux, a thunk middleware is a middleware that allows you to write action creators that return "functions" instead of plain action objects. This is particularly useful when you need to perform asynchronous operations, such as making API calls, before dispatching an action. Thunks provide a way to delay the dispatch of an action until a later time, usually after an asynchronous operation has completed.

// using Thunk so that when initUser is called it should call API in retun to result in the current amount at store.API
  //when ititUser is called it should go simply to the store but , it should call an API


  // -----Thunk  MiddleWare helps dispatch action to stop and then to call the dipatch return action. 
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

// ---Async API call
// async function getUser(){
//   const {data} = await axios.get('http://localhost:3000/accounts/1')
//   console.log(data);
// }

// getUser();

// ---API call is working well but we nee that call to be made when the insitUser is called.
//so shiftting the APi call in the Action Creator but the prbolem is Action Creatore should be Plain objects,
//It Doesn't support Async and Await there comes the problem for whcih Thunk is middleeware is used to deal with the problem as T
//As thnk Middleware lets u control the action of the application . as shown below

//Action Creation

//Making it a Thunk middle Ware Action creator by passing two parameters 
async function getUser(dispatch,getState){
  const {data} = await axios.get('http://localhost:3000/accounts/1')
  dispatch(initUser(data.amount)); // hoisting is performed for initUser
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
    store.dispatch(getUser);
  },5000);

  //Thnunk middleWare helps the dispatch two outputs 
  //After using Middler ware the dispatch changes its behaviour. if the plain action is called it behaves normaly and go to the store directly.
  //when the middleware comes in the disptach now gives two state. one for disptach and the other for the getState.
  // one is for the disptach and the other is for the getState.

