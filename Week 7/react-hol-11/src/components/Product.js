import React from 'react';

const Product = ({ name, price }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
    </div>
  );
};

export default Product;
