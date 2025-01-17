// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, username, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h1>My Airdrops</h1>
        </div>
        <ul className="navbar-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li className="navbar-item">
                <span className="navbar-link">Hello, {username}</span>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" onClick={onLogout}>Logout</button>
              </li>
              <li className="navbar-item">
                <Link to="/airdrop" className="navbar-link">Airdrops</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="navbar-link">Create Airdrop</Link>
              </li>
            </>
          ) : (
            <>
              <li className="navbar-item">
                <Link to="/register" className="navbar-link">Register</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="navbar-link">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
