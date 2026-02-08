import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../featchers/counter/counterSlice";
export function Counter(){
  const count = useSelector((state)=> state.count.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        count {count}
      </h1>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
    </div>
  )
}
