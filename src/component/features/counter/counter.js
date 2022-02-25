
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export default function Counter() {
   const count =  useSelector((state) => state.counter.count);
   const dispatch = useDispatch()
 
  return (
    <div>

       <h1>Redux </h1>
       <div className="inline-flex">
       <button className="p-1 m-1 bg-teal-800 text-white" onClick={() => {dispatch(increment())}}>+</button>
       <p className=" border border-teal-800 rounded">Counter value {count} </p>
       <button className="p-1 m-1 bg-teal-800 text-white" onClick={() => {dispatch(decrement())}}>-</button>
       </div>
       <button  onClick={() =>dispatch(incrementByAmount(15))}>increase 15</button>
      
    </div>
  )
}
