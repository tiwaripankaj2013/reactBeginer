
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

export default function Counter() {
   const count =  useSelector((state) => state.counter.count);
   const dispatch = useDispatch()
 
  return (
    <div>

<<<<<<< HEAD
       <h1>Redux Testing of rebse branch</h1>
=======
       <h1>Redux Rebase test  </h1>
>>>>>>> 12b4598a0171adfce49250fe85fe40d40522a77e
       <div className="inline-flex">
       <button className="p-1 m-1 bg-teal-800 text-white" onClick={() => {dispatch(increment())}}>+</button>
       <p className=" border border-teal-800 rounded">Counter value {count} </p>
       <button className="p-1 m-1 bg-teal-800 text-white" onClick={() => {dispatch(decrement())}}>-</button>
       </div>
       <button  onClick={() =>dispatch(incrementByAmount(15))}>increase 15</button>
      <p>Try rebase code of react </p>
    </div>
  )
}
