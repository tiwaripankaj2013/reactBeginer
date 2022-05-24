
import {configureStore} from "@reduxjs/toolkit";
// old redux counterr application for define
import counterReducer from '../../components/features/counter/counterSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

 const store = configureStore({
   reducer:{
      counter:counterReducer,
      product:productReducer,
      cart:cartReducer,
      
   },
})
export default store;