//-------------Creating an examplte to see the CreateReducers and createAction 
//-------Here we are not using Slice , so we need to create Reducers and the actions,
//----its just an example suppose in future we use it 


import { createAction, createReducer } from '@reduxjs/toolkit';

//----Creating Action - the benifit is that we have the ful control of the API call
export const increment = createAction('reward/increment');
export const incrementByAmount = createAction('reward/incrementByAmount');


const initialState = {
  points : 15
}

//------Every thing is same only builder is something extra in it
//---- the extra call back fucntion (builder), which can have different functions  
const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++
    })
    .addCase(incrementByAmount, (state, action) => {
       state.points += action.payload
     })
})

export default rewardReducer;