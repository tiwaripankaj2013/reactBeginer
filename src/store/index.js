
import {configureStore} from "@reduxjs/toolkit";
// old redux counterr application for define
import counterReducer from './counterSlice';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import userReducer  from "./userSlice";
 const store = configureStore({
   reducer:{
      counter:counterReducer,
      product:productReducer,
      cart:cartReducer,
      user:userReducer
      
   },
});
export default store;