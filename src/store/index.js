import {createStore} from 'redux';
import {createSlice} from "@reduxjs/toolkit";

const initialState = {counter:0,showCounter:true};

const counterSLice = createSlice({
   name:'counter',
   initialState,
   reducers:{
      increment(state){
         state.counter++;
      },
      decrement(state){
         state.counter--;
      },
      increase(state,action){
         state.counter = state.counter + action.amount;
      },
      toggleCounter(state){
         state.showCounter = !state.showCounter;
      }
   }
});
const countReducer = (state =initialState ,action) =>{
   if(action.type === 'increment'){
      return {
         counter:state.counter+1,
      };
   }
   if(action.type === 'decrement'){
      return {
         counter:state.counter-1,
      };
   }
   return state;
};
const store = createStore(countReducer);

export default store;