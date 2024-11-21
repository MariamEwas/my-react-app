import React, { useState } from 'react';
import axios from 'axios';
import '../styles/details.css'; // Import the CSS file

export default function UserDetails() {
  let [user, setUser] = useState('');
  let [error, setError] = useState(null);
  let [input, setInput] = useState('');

  async function handleClick() {
    if (input === '') {
      alert('You did not write any user ID!');
    } else {
      try {
        const res = await axios.get(`http://localhost:3000/users/${input}`);
        if (res) {
          setUser(res.data);
          setError(null);
        }
      } catch (err) {
        setError(err);
        setUser(null);
      }
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <div className="user-details-container">
      <h2>User Details</h2>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter User ID"
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <div>
        {user && 
        <div className="user-data">
            <p>Name: {user.name}</p>
            <p>Type: {user.userType}</p>
            <p>Cart :</p>
            {<ul>
                                {user.shoppingCart &&
                                    user.shoppingCart.map((pro) => (
                                        <li key={pro._id || pro.name}>
                                            {pro.name}, {pro.quantity}
                                        </li>
                                    ))}
                            </ul> }
        </div>}
        {error && <div className="error-message">{error.message}</div>}
      </div>
    </div>
  );
}
