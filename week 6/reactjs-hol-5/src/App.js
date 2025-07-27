

import React from 'react';
import './App.css';
import Message from './Message';

function App() {
  return (
    <div className="App">
      <h1>React Hands-on 5: Components and Props</h1>
      <Message title="Welcome" content="This is a reusable component using props!" />
      <Message title="Reminder" content="Don't forget to complete your Deep Skilling Week 6." />
    </div>
  );
}

export default App;
