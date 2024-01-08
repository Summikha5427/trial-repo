import { createStore } from "redux"; // createStore is the older usage for creating store, replaced by configureStore

//1st step creating store of redux

const store = createStore(reducer);
const history = [];  // trying to have an empty Array to save the new state values

//creating a store which contains two parameter 'State' 'action' and returns a state.

//reducer is nothing but some Function

function reducer(state = { amount: 1 }, action) {
  //initial value can be given to the State
  if (action.type === "increment") {
    //immutability
    return {amount : state.amount + 1};
  }
  return state;
}

store.subscribe(()=>{
  history.push(store.getState());
  console.log(history);
});

//global State = trying to check the amount
// to get the glosbal state we have '.get State()'
//==>its an action whcih has to be send to the reducer.
//its a Event-Driver , which takes place when the event takes place
//action is not a part of redux, its a convention to indicate that something has to be performed
//Event has a listener
// ==>dispatch is the one who initates the Event and Rreducer is the one who listen as a listener

// console.log(store.getState());

//Subscribe Function ==> infroms  when the state changes, or a disptach is send

//SetInterval ==> to run/send a dispatch "increment at every 2s"
  setInterval(()=>{
    store.dispatch({ type: "increment" });
  },2000);