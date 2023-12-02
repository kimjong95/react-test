import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const newButtonColor = color === "blue" ? "red" : "blue";

  const changeColor = () => {
    if (color === "blue") {
      setColor("red");
    } else {
      setColor("blue");
    }
  };

  return (
    <div>
      <button style={{ backgroundColor: `${color}` }} onClick={changeColor}>
        {`Change to ${newButtonColor}`}
      </button>
    </div>
  );
}

export default App;
