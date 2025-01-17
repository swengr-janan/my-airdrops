// src/components/AirdropList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AirdropList.css";

const AirdropList = () => {
  const [airdrops, setAirdrops] = useState([]);

  useEffect(() => {
    // Fetch airdrops from backend
    axios.get("http://localhost:5000/api/airdrops")
      .then((response) => {
        setAirdrops(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the airdrops:", error);
      });
  }, []);

  return (
    <div className="airdrop-list-container">
      <h1 className="title">Airdrop List</h1>
      <div className="airdrop-cards">
        {airdrops.map((airdrop) => (
          <div key={airdrop._id} className="airdrop-card">
            <h2>{airdrop.name}</h2>
            <p>{airdrop.description}</p>
            <div className="airdrop-details">
              <p>Amount: {airdrop.amount}</p>
              <p>Recipient: {airdrop.recipient}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirdropList;
