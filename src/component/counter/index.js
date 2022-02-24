import React from 'react';
import { useSelector,connect } from 'react-redux';


export default function Counter() {

   const counter =  useSelector(state => state.counter);
   const toggleCounterHandler = () => {

   }
  return (
    <div>

       <h1>Redux </h1>
         <p>{counter}</p>
       <button onClick={toggleCounterHandler}>Toggle Counter</button>
      
    </div>
  )
}
