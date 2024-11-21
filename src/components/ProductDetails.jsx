import React, { useState } from 'react';
import axios from 'axios';
import '../styles/productdetails.css'; // Import the CSS file

export default function ProductDetails() {
  let [product, setProduct] = useState('');
  let [error, setError] = useState(null);
  let [input, setInput] = useState('');

  async function handleClick() {
    if (input === '') {
      alert('You did not write any product ID!');
    } else {
      try {
        const res = await axios.get(`http://localhost:3000/products/${input}`);
        if (res) {
          setProduct(res.data);
          setError(null);
        }
      } catch (err) {
        setError(err);
        setProduct(null);
      }
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="product-details-container">
      <h2>Product Details</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter Product ID"
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        {product && 
        <div className="product-data">
            <p>Name : {product.name}</p>
            <p>Price : {product.price}</p>
            <p>Quantity : {product.quantity}</p>

        </div>}
        {error && <div className="error-message">{error.message}</div>}
      </div>
    </div>
  );
}
