//----installed reduxjs/toolkit to use "createSlice" using => " npm i @reduxjs/toolkit "

import { createSlice } from '@reduxjs/toolkit'
import { incrementByAmount } from './accountSlice'

const initialState = {
  points: 1
}

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {   //reducers are like object which has some properties
    increment: (state) => {
      state.points += 1  //direct we are updating the state witha magic of "immerece libraby"
    },
    incrementByAmount: (state, action) => {
      state.points += action.payload
    },
  },

  //-----Extra Reducers: 
      //to have an effect two components at the same point dpending on the conditions
      //need of Async functions.
      
  extraReducers:(builder)=>{
    builder
      .addCase(incrementByAmount,(state,action)=>{
        if(action.payload>=100){
          state.points +=1
        }
      });
    }
})

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions

//The above line has accountSlice.actions .  The action like "type" , "payload" are implicitly created by the redux toolkit
// This is the benefit of the redux toolkit. it creates everything immplicitly with immercible library with few code created by us. 

export default bonusSlice.reducer  //it also provides a reducer for the file which redux requires. 
                                          // the above define redux is not the redux neede by redux, it is just the pattern to create na simplify the work of creating action creators and the action.... 