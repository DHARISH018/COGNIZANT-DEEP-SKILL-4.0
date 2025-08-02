import React from 'react';

const UserProfile = ({ name, email, location }) => {
  return (
    <div style={{ border: '2px solid #ccc', padding: '20px', width: '300px', margin: 'auto', borderRadius: '10px' }}>
      <h2>{name}</h2>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default UserProfile;
