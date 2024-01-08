// -----MiddleWare
  //used for any kind of any MiddleAction


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
  }
  return state;
}

//Action in store to get the state and store it in the History variale
// store.subscribe(()=>{
//   history.push(store.getState());
//   console.log(history);
// });

//Setting a Varibale to perform a dispatch an action to the Store that is Increment s
setInterval(()=>{
    store.dispatch({ type: "increment" });
  },5000);

  //MiddleWare 
        // -Using a redux-Loogger middleWare  from REdux-looger Library
        //'applyMiddlerware' needs to be imported to use a midlleWare inside the rEdux

