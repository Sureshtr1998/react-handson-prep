import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions";
import { incrementSlice, decrementSlice,setValueSlice } from "./counterSlice";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const counterSlice = useSelector((state) => state.counterSlice.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    let counter = 0
   const intervalId = setInterval(() => {
     counter++
      dispatch(increment())
      if(counter === 10){
        clearInterval(intervalId)
      }
    },1000)
   
  }

  return <div> 
    <h2>Count :{counter}</h2>
    <button onClick={ () =>dispatch(increment())}>+ </button>
    <button onClick={handleClick}>Timer </button>
    <button onClick={() => dispatch(decrement())}>- </button>

    <h2>Count Slice :{counterSlice}</h2>
    <button onClick={() => dispatch(incrementSlice())}>+ </button>
    <button onClick={() => dispatch(decrementSlice())}>- </button>
    <button onClick={() => dispatch(setValueSlice(10))}>Set 10 </button>
  </div>;
};

export default Counter;
