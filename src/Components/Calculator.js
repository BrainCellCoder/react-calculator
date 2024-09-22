import React, { useState } from "react";
import "./Calculator.css";
const Calculator = () => {
  // State hooks for the inputs, result, and error message
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Function to validate the inputs
  const validateInputs = () => {
    if (!num1 || !num2) {
      setError("Both fields are required!");
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError("Please enter valid numbers.");
      return false;
    }

    return true;
  };

  // Functions for each operation
  const handleAddition = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) + parseFloat(num2));
      setError("");
    }
  };

  const handleSubtraction = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) - parseFloat(num2));
      setError("");
    }
  };

  const handleMultiplication = () => {
    if (validateInputs()) {
      setResult(parseFloat(num1) * parseFloat(num2));
      setError("");
    }
  };

  const handleDivision = () => {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setError("Division by zero is not allowed.");
        return;
      }
      setResult(parseFloat(num1) / parseFloat(num2));
      setError("");
    }
  };

  const resetBtnHandler = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <div>
        <input
          type="text"
          placeholder="Num 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Num 2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>

      {/* Result or Error */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {result !== null && (
        <p style={{ color: "green" }}>
          Success! <br />
          Result: {result}
          <button id="resetBtn" onClick={resetBtnHandler}>
            Reset
          </button>
        </p>
      )}
    </div>
  );
};

export default Calculator;
