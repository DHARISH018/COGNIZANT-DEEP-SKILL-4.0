import React from 'react';
import Product from './Product';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 55000 },
    { id: 2, name: 'Mobile', price: 20000 },
    { id: 3, name: 'Tablet', price: 25000 }
  ];

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Product List</h2>
      {products.map((product) => (
        <Product key={product.id} name={product.name} price={product.price} />
      ))}
    </div>
  );
};

export default ProductList;
