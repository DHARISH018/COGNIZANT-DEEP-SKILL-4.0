import React, { useState } from 'react';
import UserProfile from './components/UserProfile';

function App() {
  const [user] = useState({
    name: "Dharish",
    email: "dharish111@.com",
    location: "India"
  });

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ReactJS HOL 9 - User Profile</h1>
      <UserProfile name={user.name} email={user.email} location={user.location} />
    </div>
  );
}

export default App;
