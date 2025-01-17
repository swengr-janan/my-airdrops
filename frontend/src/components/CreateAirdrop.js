// src/components/CreateAirdrop.js
import React, { useState } from "react";
import axios from "axios";
import "./CreateAirdrop.css";

const CreateAirdrop = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new airdrop
    axios.post("http://localhost:5000/api/airdrops", {
      name,
      description,
      amount,
      recipient,
    })
    .then((response) => {
      alert("Airdrop created successfully!");
      setName("");
      setDescription("");
      setAmount("");
      setRecipient("");
    })
    .catch((error) => {
      console.error("There was an error creating the airdrop:", error);
    });
  };

  return (
    <div className="create-airdrop-container">
      <h1>Create Airdrop</h1>
      <form onSubmit={handleSubmit} className="create-airdrop-form">
        <div className="input-field">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label>Recipient:</label>
          <input
            type="text"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Create Airdrop</button>
      </form>
    </div>
  );
};

export default CreateAirdrop;
