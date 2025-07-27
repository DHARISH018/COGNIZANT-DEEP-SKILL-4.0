// src/App.js

import React from 'react';
import './App.css';

function App() {
  const fruits = ['Apple', 'Banana', 'Cherry', 'Mango', 'Orange'];

  return (
    <div className="App">
      <h1>React Hands-on 3: Display a List</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
