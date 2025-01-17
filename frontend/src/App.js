// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import AirdropList from './components/AirdropList';
import CreateAirdrop from './components/CreateAirdrop';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track login state
  const [username, setUsername] = useState(''); // Store the username after login

  // Function to handle login (simulating a successful login)
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  // Function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <Navbar 
        isLoggedIn={isLoggedIn} 
        username={username} 
        onLogout={handleLogout} 
      />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route 
          path="/airdrop" 
          element={isLoggedIn ? <AirdropList /> : <div>Please log in to view airdrops.</div>} 
        />
        <Route 
          path="/create" 
          element={isLoggedIn ? <CreateAirdrop /> : <div>Please log in to create airdrop.</div>} 
        />
      </Routes>
    </Router>
  );
};

export default App;
