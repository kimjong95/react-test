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

  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button
        style={{ backgroundColor: disabled ? "gray" : `${color}` }}
        disabled={disabled}
        onClick={changeColor}
      >
        {`Change to ${newButtonColor}`}
      </button>
      <input
        id="disable-button-checkbox"
        type="checkbox"
        name="Disable button"
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
