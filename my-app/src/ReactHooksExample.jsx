import React, { useState } from 'react';
import Row from './Row';

const ReactHooksExample = (props) => {
  const [name, setName] = useState('Mary');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="column">
      <p>React Hooks Example </p>
      <Row label="Name">
        <input 
          value={name}
          onChange={handleNameChange}
        />
      </Row>
    </div>
  );
};

export default ReactHooksExample;
  