import React from 'react';
import "./Row.css";

const Row = (props) => {
  const { label, children } = props;

  return (
    <div className="Row">
      <p>{label}</p>
      {children}
    </div>
  );
}

export default Row;
