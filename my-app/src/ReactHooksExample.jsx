import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
import { ThemeContext } from './ThemeContext';

const ReactHooksExample = (props) => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Smith');
  const [width, setWidth] = useState(window.innerWidth);
  const theme = useContext(ThemeContext);


  useEffect(() => {
    document.title = 'New:' + name;
  })

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  })

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  }

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
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
      <Row label="Width">
          <div>{width}</div>
        </Row>
    </div>
  );
};

export default ReactHooksExample;
  