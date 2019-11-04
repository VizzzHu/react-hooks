import React from 'react';
import './App.css';
import { ThemeContext, themes } from './ThemeContext';
import OldReactExample from './OldReactExample';
import ReactHooksExample from './ReactHooksExample';

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
        <div className="App">
            <OldReactExample name="Mary"/>
            <ReactHooksExample name="Mary"/>
        </div>
    </ThemeContext.Provider>

  );
}

export default App;
