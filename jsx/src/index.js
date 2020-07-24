import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const labelText = "Enter your name : ";
  const buttonText = { text: "Click Me" };

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input type="text" id="name" />
      <br />
      <button style={{ backgroundColor: "yellow", color: "black" }}>
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
