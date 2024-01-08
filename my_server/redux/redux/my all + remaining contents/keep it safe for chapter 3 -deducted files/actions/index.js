import axios from 'axios';

//----ACTION NAMES Constants.....

// const init = "account/init"; not using it further as one of the three states has this property
export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmt = "account/incrementByAmount";
export const getAccUserPen= "account/getUser/pending";
export const getAccUserFul = "account/getUser/fulfilled";
export const getAccUserRej= "account/getUser/rejected";
export const incBonus = "bonus/incrementByAmount";

//ActionCreators.....

//Making it a Thunk middle Ware Action creator by passing two parameters
//passing 3 action in the thunk middleware for proper case handling
export function getUserAccount(id) {
  return async (dispatch, getState) => {
    try{
        dispatch(getAccountUserPending());
        const { data } = await axios.get(`http://localhost:8080/accounts/${id}`);
         dispatch(getAccountUserFulFilled(data.amount));
    }catch(error){
      dispatch(getAccountUserRejected(error.message));
    }
}
};

export function getAccountUserFulFilled(value) {
return { type: getAccUserFul, payload: value };
};

export function getAccountUserRejected(error) {
return { type: getAccUserRej, error: error };
};

export function getAccountUserPending() {
return { type: getAccUserPen };
};

export function increment() {
return { type: inc };
};

export function decrement() {
return { type: dec };
};

export function incrementByBonus(){
return {type: incBonus}
};

export function incrementByAmount(value) {
return { type: incByAmt, payload: value };
};
