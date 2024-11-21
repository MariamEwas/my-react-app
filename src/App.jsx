import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserPage from "./components/UserPage";
import ProductPage from "./components/ProductPage";
import Dashboard from "./components/DashBoard";
import ShoppingCart from './components/shoppingCart'
import UserDetails from './components/UserDetails'
import ProductDetails from './components/ProductDetails'

export default function App() {
    return (
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav className="navbar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/search-user">Find a User</Link></li>
                        <li><Link to="/search-product">Find a product</Link></li>

                    </ul>
                </nav>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UserPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="/search-user" element={<UserDetails />} />
                    <Route path="/search-product" element={<ProductDetails />} />

                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/cart/:userId"  element={<ShoppingCart />} />
                </Routes>
            </div>
        </Router>
    );
}
