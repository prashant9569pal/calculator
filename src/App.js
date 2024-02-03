import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [val, setVal] = useState("");

  const handleButtonClick = (value) => {
    setVal((prevVal) => prevVal + value);
  };

  const handleKeyboardInput = (event) => {
    const key = event.key;

    if (key >= "0" && key <= "9") {
      handleButtonClick(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      handleButtonClick(key);
    } else if (key === "=" || key === "Enter") {
      setVal(eval(val));
    } else if (key === "C" || key === "c") {
      setVal("");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboardInput);
    return () => {
      document.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [val]);

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={val}></input>
        <div className="row">
          <input type="button" value={"C"} onClick={() => setVal("")}></input>
          <input
            type="button"
            value={1}
            onClick={() => handleButtonClick("1")}
          ></input>
          <input
            type="button"
            value={2}
            onClick={() => handleButtonClick("2")}
          ></input>
          <input
            type="button"
            value={"+"}
            onClick={() => handleButtonClick("+")}
          ></input>
        </div>
        <div className="row">
          <input
            type="button"
            value={3}
            onClick={() => handleButtonClick("3")}
          ></input>
          <input
            type="button"
            value={4}
            onClick={() => handleButtonClick("4")}
          ></input>
          <input
            type="button"
            value={5}
            onClick={() => handleButtonClick("5")}
          ></input>
          <input
            type="button"
            value={"-"}
            onClick={() => handleButtonClick("-")}
          ></input>
        </div>
        <div className="row">
          <input
            type="button"
            value={6}
            onClick={() => handleButtonClick("6")}
          ></input>
          <input
            type="button"
            value={7}
            onClick={() => handleButtonClick("7")}
          ></input>
          <input
            type="button"
            value={8}
            onClick={() => handleButtonClick("8")}
          ></input>
          <input
            type="button"
            value={"*"}
            onClick={() => handleButtonClick("*")}
          ></input>
        </div>
        <div className="row">
          <input
            type="button"
            value={9}
            onClick={() => handleButtonClick("9")}
          ></input>
          <input
            type="button"
            value={"/"}
            onClick={() => handleButtonClick("/")}
          ></input>
          <input
            type="button"
            value={"="}
            onClick={() => setVal(eval(val))}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default App;
