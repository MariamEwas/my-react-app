import React, { useState } from 'react';
import axios from 'axios';
import '../styles/ProductForm.css'; // Import the CSS for the form

export default function ProductForm() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity ,setQuantity] = useState(0);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price,
      quantity
    };

    try {
      // Send POST request to your API to add the product
      const response = await axios.post('http://localhost:3000/products', newProduct);
      setSuccess('Product added successfully!');
      setName('');
      setPrice('');
      setQuantity(null);
    } catch (err) {
      setError('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="product-form-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Product Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Add Product
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </div>
  );
}
