//----installed reduxjs/toolkit to use "createSlice" using => " npm i @reduxjs/toolkit "

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount: 1
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {   //reducers are like object which has some properties
    increment: (state) => {
      state.amount += 1  //direct we are updating the state witha magic of "immerece libraby"
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions
//The above line has accountSlice.actions .  The action like "type" , "payload" are implicitly created by the redux toolkit
// This is the benefit of the redux toolkit. it creates everything immplicitly with immercible library with few code created by us. 

export default accountSlice.reducer  //it also provides a reducer for the file which redux requires. 
                                          // the above define redux is not the redux neede by redux, it is just the pattern to create na simplify the work of creating action creators and the action.... 