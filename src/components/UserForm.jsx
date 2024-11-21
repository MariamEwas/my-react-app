import React, { useState } from 'react';
import axios from 'axios';
import '../styles/UserForm.css'; // Import the CSS for the form

export default function UserForm() {
  const [name, setName] = useState('');
  const [userType ,setUserType] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name,
      userType
    };

    try {
      // Send POST request to your API to add the product
      const response = await axios.post('http://localhost:3000/users', newUser);
      setSuccess('User added successfully!');
      setName('');
      setUserType('');

    } catch (err) {
      setError('Failed to add user. Please try again.');
    }
  };

  return (
    <div className="user-form-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
          <label htmlFor="name">User Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="userType">User Type</label>
          <input
            type="text"
            id="userType"
            value={userType}
            onChange={(e) => {console.log(e.target.value);setUserType(e.target.value)}}
            required
          />
        </div>


        <button type="submit" className="submit-button">
          Add User
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}
    </div>
  );
}
