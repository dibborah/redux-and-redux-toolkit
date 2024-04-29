import { useSelector, useDispatch } from "react-redux";
import { increment, reset, decrement } from "./features/counter/counterSlice";

const App = () => {
  const state = useSelector((state) => {
    return state.counter;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h1>hello , {state.username}</h1>
      <h1>Counter: {state.count} </h1>
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
        Increase
      </button>
    </div>
  );
};

export default App;
