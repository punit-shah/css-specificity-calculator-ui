import React from 'react';
import PropTypes from 'prop-types';
import './Specificity.css';

const Specificity = ({ value: [ids, classes, elements] }) => (
  <div className="Specificity">
    <p className="Specificity-value">
      <span className="Specificity-ids">{ids}</span>
      <span className="Specificity-classes">{classes}</span>
      <span className="Specificity-elements">{elements}</span>
    </p>
    <p className="Specificity-text">
      <span className="Specificity-ids">{ids}</span> IDs
    </p>
    <p className="Specificity-text">
      <span className="Specificity-classes">{classes}</span> classes,
      attributes, and pseudo-classes
    </p>
    <p className="Specificity-text">
      <span className="Specificity-elements">{elements}</span> elements and
      pseudo-elements
    </p>
  </div>
);

Specificity.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number),
};

export default Specificity;
