import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <div>
      <input type="range" onChange={(e) => setStep(Number(e.target.value))} min="0" max="10"></input>
      <span>Step:{step} </span>
      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />

        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>
      <span>
        {count === 0 && "Today is"} {count > 0 && `${count} from today is`}
        {count < 0 && `${Math.abs(count) + " days ago was"}`}
        {today.toDateString()}
      </span>
    </div>
  );
}
//
