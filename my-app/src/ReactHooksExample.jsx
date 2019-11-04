import React, { useState, useContext } from 'react';
import Row from './Row';
import { ThemeContext } from './ThemeContext';

const ReactHooksExample = (props) => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Smith');
  const theme = useContext(ThemeContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  }

  return (
    <div className="column" style={{ 'backgroundColor': theme.backgroundColor, 'color': theme.fontColor }}>
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
  