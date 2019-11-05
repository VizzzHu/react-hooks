import React, { useState, useContext, useEffect } from 'react';
import Row from './Row';
import { ThemeContext } from './ThemeContext';

const useFormInput = (input) => {
  const [value, setValue] = useState(input);
  const handleOnChange = (e) => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleOnChange,
  };
};

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title; 
  });
};

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    }
  });

  return width;
};

const ReactHooksExample = (props) => {
  const name = useFormInput('Mary');
  const surname = useFormInput('Smith');
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();
  useDocumentTitle('New:' + name.value);

  return (
    <div className="column" style={{ 'backgroundColor': theme.backgroundColor, 'color': theme.fontColor }}>
      <p>React Hooks Example </p>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname}/>
      </Row>
      <Row label="Width">
          <div>{width}</div>
        </Row>
    </div>
  );
};

export default ReactHooksExample;
  