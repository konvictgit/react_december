import "./App.css";
import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    console.log("clicked", counter);

    counter = counter + 1;
    setCounter(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter((counter = 0));
    }
    // console.log("clicked", counter);

    // counter = counter - 1;
    // setCounter(counter);
  };

  return (
    <>
      <h1>Hello</h1>
      <h2>Counter Value :{counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
