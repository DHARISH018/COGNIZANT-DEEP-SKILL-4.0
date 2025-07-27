// src/App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [isShown, setIsShown] = useState(true);

  const toggleMessage = () => {
    setIsShown(!isShown);
  };

  return (
    <div className="App">
      <h1>React Hands-on 4: Conditional Rendering</h1>
      <button onClick={toggleMessage}>
        {isShown ? "Hide Message" : "Show Message"}
      </button>
      {isShown && <p>This is a toggleable message!</p>}
    </div>
  );
}

export default App;
