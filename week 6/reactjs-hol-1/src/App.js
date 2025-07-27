// src/App.js

import React from 'react';
import './App.css';

function App() {
  const userName = "Dharish"; // Replace with your real name if you like
  const today = new Date().toLocaleDateString();

  return (
    <div className="App">
      <h1>Welcome to React Hands-on 1</h1>
      <p>Hello, my name is <strong>{userName}</strong>.</p>
      <p>Today's date is: <strong>{today}</strong></p>
    </div>
  );
}

export default App;
