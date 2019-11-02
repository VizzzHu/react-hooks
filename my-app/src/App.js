import React from 'react';
import './App.css';
import OldReactExample from './OldReactExample';
import ReactHooksExample from './ReactHooksExample';

function App() {
  return (
    <div className="App">
        <OldReactExample name="Mary"/>
        <ReactHooksExample name="Mary"/>
    </div>
  );
}

export default App;
