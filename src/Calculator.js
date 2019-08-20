import React, { useState } from 'react';
import calculateSpecificity from 'css-specificity-calculator';
import './Calculator.css';
import Specificity from './Specificity';

const Calculator = () => {
  const [selector, setSelector] = useState('');
  const [specificity, setSpecificity] = useState([0, 0, 0]);

  return (
    <div className="Calculator">
      <form
        className="Calculator-form"
        onSubmit={event => {
          event.preventDefault();
          const newSpecificity = calculateSpecificity(selector);
          setSpecificity(newSpecificity);
        }}
      >
        <label className="Calculator-selector">
          <span className="Calculator-selector-label">Selector:</span>
          <input
            className="Calculator-selector-input"
            type="text"
            value={selector}
            onChange={event => setSelector(event.target.value)}
            placeholder="enter any css selector"
          />
        </label>
        <button
          className="Calculator-submit"
          type="submit"
          aria-label="Calculate specificity"
        >
          <span>calculate</span>!
        </button>
      </form>

      <Specificity value={specificity} />
    </div>
  );
};

export default Calculator;
