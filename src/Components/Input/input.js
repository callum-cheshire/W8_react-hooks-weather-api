import React from "react";
import { useState } from "react";
import "./input.css";

function Input(prop) {
  const [userInput, setUserInput] = useState("");

  function handleChange(event) {
    setUserInput(event.target.value);
    console.log("Value is: ", event.target.value);
  }

  return (
    <div>
      <input
        class="datebox"
        type="date"
        min="1995-06-16"
        onChange={handleChange}
      />{" "}
      <br />
      <button
        class="button-85"
        role="button"
        type="button"
        onClick={() => {
          prop.handleClick(userInput);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default Input;
