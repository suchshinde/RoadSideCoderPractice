import { useState, useEffect } from "react";
import useCusotmEffect from "../hooks/customUseEffect";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  //const [counter1, setCounter1] = useState(0);

  useCusotmEffect(() => {
    console.log("inside useeffect Rendered");

    return () => {
      console.log("inside rerurn ");
    };
  }, [counter]);

  console.log("Rendered");

  return (
    <div>
      <h1>Counter Module</h1>
      <h5>Counted is: {counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setCounter(counter - 1)}
      >
        Decrement
      </button>
    </div>
  );
}
