import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/UserPage.css'; // Import the CSS file

export default function UserPage() {
    let [users, setUsers] = useState(null);
    let [error, setError] = useState(null);
    let [error2, setError2] = useState(null);
    let [cart, setCart] = useState(null);

    useEffect(() => {
        async function fetchdata() {
            try {
                let u = await axios.get('http://localhost:3000/users');
                if (u) {
                    console.log(u.data);
                    setUsers(u.data);
                }
            } catch (err) {
                setError(err);
            }
        }

        fetchdata();
    }, []);

    const handleGoToCart = (userId) => {
        // Redirect to the shopping cart page for this user
        window.location.href = `/cart/${userId}`;
    };

    return (
        <div className="user-page">
            <h1>User List</h1>
            {error && <div className="error-message">Error fetching users: {error.message}</div>}
            {error2 && <div className="success-message">Error fetching products: {error2.message}</div>}
            
            <ul>
                {users &&
                    users.map((user) => (
                        <li key={user._id}>
                            <strong>Name : {user.name}</strong> <br />
                            <p>User type : {user.userType} </p>
                            <p>Number of Items in ShoppingCart : {user.shoppingCart.length}</p>
                            {/* <ul>
                                {user.shoppingCart &&
                                    user.shoppingCart.map((pro) => (
                                        <li key={pro._id || pro.name}>
                                            {pro.name}, {pro.quantity}
                                        </li>
                                    ))}
                            </ul> */}
                            <button
                                className="cart-button"
                                onClick={() => handleGoToCart(user._id)}
                            >
                                Go to Shopping Cart
                            </button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
