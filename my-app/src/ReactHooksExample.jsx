import React, { useState } from 'react';
import Row from './Row';

const ReactHooksExample = (props) => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Smith');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
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
      <Row label="Surname">
        <input
          value={surname}
          onChange={handleSurnameChange}
        />
      </Row>
    </div>
  );
};

export default ReactHooksExample;
  