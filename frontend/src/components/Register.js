// src/components/Register.js
import React, { useState } from 'react';
import axios from '../axios'; // Axios instance

const Register = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend
      const response = await axios.post('/auth/register', {
        name,
        username,
        password,
      });

      // Handle success response
      setSuccessMessage(response.data.message);
      setError('');
    } catch (err) {
      // Handle error response
      setError(err.response ? err.response.data.message : 'Registration failed');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      {error && <div>{error}</div>}
      {successMessage && <div>{successMessage}</div>}
    </div>
  );
};

export default Register;
