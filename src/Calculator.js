import React, { useState } from 'react';
import calculateSpecificity from 'css-specificity-calculator';
import './Calculator.css';

const Calculator = () => {
  const [selector, setSelector] = useState('');
  const [specificity, setSpecificity] = useState('0');

  return (
    <div className="Calculator">
      <form
        className="Calculator-form"
        onSubmit={(event) => {
          event.preventDefault();
          const newSpecificity = calculateSpecificity(selector);
          setSpecificity(newSpecificity);
        }}
      >
        <label>
          <span className="Calculator-selector-label">Selector:</span>
          <input
            className="Calculator-selector-input"
            type="text"
            value={selector}
            onChange={(event) => setSelector(event.target.value)}
          />
        </label>
        <input
          className="Calculator-submit"
          type="submit"
          value="!"
          ariaLabel="Calculate specificity"
        />
      </form>

      <p className="Calculator-value">{specificity}</p>
    </div>
  );
};

export default Calculator;
