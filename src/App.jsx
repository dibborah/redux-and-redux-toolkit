import {useSelector} from "react-redux";

const App = () => {
  const {count} = useSelector((state)=>{
    return state.counter;
  })
  console.log(count);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button>Increase</button>
      <button>Reset</button>
      <button>Decrease</button>
    </div>
  );
};

export default App;
