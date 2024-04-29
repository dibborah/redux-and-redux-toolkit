import { useDispatch, useSelector } from "react-redux";
import { increment, reset, decrement } from "./features/counter/counterSlice";
const App = () => {
  const { count } = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      {
        // ya pe hum state ko change karenge
        // And hamesa yad rakhna
        // Kisi v state ko change karne ke liye hum use karte hain dispatch function
      }
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default App;

// dispatch function (action) ---> reducer --> Change state --> UI update
