import React,{useState} from 'react';
import { useSelector} from 'react-redux';


export default function Counter() {
const [count ,setCount] = useState(0);
   const counter =  useSelector(state => state.counter);
   const toggleCounterHandler = () => {

   }
  return (
    <div>

       <h1>Redux </h1>
       <button onClick={() => {setCount(count +1)}}>+</button>
       <p>Counter value {count} </p>
       <button onClick={() => {setCount(count -1)}}>-</button>
         <p>{counter}</p>
       <button onClick={toggleCounterHandler}>Toggle Counter</button>
      
    </div>
  )
}
