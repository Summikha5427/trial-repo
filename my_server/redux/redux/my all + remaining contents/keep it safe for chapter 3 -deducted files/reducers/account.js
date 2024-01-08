import { getAccUserFul, getAccUserPen, getAccUserRej, inc, dec , incByAmt } from "../actions";


// -----Actions- The many actions , those many creators

//Reducer Function to Perform Action
export function accountReducer(state = { amount: 1 }, action) {
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