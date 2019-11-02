import React from 'react';

const Row = (props) => {
  const { label, children } = props;

  return (
    <div>
      <p>{label}</p>
      {children}
    </div>
  );
}

export default Row;
