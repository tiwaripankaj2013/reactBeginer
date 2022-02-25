
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from '../component/features/counter/counterSlice';

 const store = configureStore({
   reducer:{
      counter:counterReducer,
   }
})
export default store;