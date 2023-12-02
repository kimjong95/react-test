import { useState } from "react";
import "./App.css";
import { replaceCamelCaseWithSpaces } from "./replaceCamelCaseWithSpaces";

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const newButtonColor =
    color === "MidnightBlue" ? "MediumVioletRed" : "MidnightBlue";

  const changeColor = () => {
    if (color === "MidnightBlue") {
      setColor("MediumVioletRed");
    } else {
      setColor("MidnightBlue");
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
        {`Change to ${replaceCamelCaseWithSpaces(newButtonColor)}`}
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
