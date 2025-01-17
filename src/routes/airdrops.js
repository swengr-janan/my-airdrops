// routes/airdrops.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const Airdrop = require("../models/Airdrop");


// Create Airdrop
router.post("/", async (req, res) => {
    const { name, description, amount, recipient } = req.body;
    try {
      const newAirdrop = new Airdrop({ name, description, amount, recipient });
      await newAirdrop.save();
      res.status(201).json(newAirdrop);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  // Get all Airdrops
  router.get("/", async (req, res) => {
    try {
      const airdrops = await Airdrop.find();
      res.status(200).json(airdrops);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  // Get Airdrop by ID
  router.get("/:id", async (req, res) => {
    try {
      const airdrop = await Airdrop.findById(req.params.id);
      if (!airdrop) {
        return res.status(404).json({ message: "Airdrop not found" });
      }
      res.status(200).json(airdrop);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  // Update Airdrop
  router.put("/:id", async (req, res) => {
    try {
      const airdrop = await Airdrop.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!airdrop) {
        return res.status(404).json({ message: "Airdrop not found" });
      }
      res.status(200).json(airdrop);
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  // Delete Airdrop
  router.delete("/:id", async (req, res) => {
    try {
      const airdrop = await Airdrop.findByIdAndDelete(req.params.id);
      if (!airdrop) {
        return res.status(404).json({ message: "Airdrop not found" });
      }
      res.status(200).json({ message: "Airdrop deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Server Error" });
    }
  });

// Middleware to verify JWT token
function verifyToken(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) return res.status(401).send({ error: 'Access Denied' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send({ error: 'Invalid Token' });
        req.user = user;
        next();
    });
}

// Airdrop Model (You can create a model later to interact with your database)
let airdrops = []; // In-memory storage for now

// Add Airdrop
router.post('/add', verifyToken, (req, res) => {
    const { projectName, xAccount, referralLink, walletUsed, network, type, device, status, listingDate } = req.body;

    // Store the airdrop in memory (later replace this with a database interaction)
    const newAirdrop = {
        id: airdrops.length + 1, // Simple ID generator
        projectName,
        xAccount,
        referralLink,
        walletUsed,
        network,
        type,
        device,
        status,
        listingDate
    };
    airdrops.push(newAirdrop);

    res.json({
        message: 'Airdrop added successfully',
        airdrop: newAirdrop
    });
});

// List Airdrops
router.get('/', verifyToken, (req, res) => {
    res.json(airdrops); // Return all airdrops (later filter by user)
});

// Edit Airdrop (example PUT)
router.put('/edit/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    const { profitGain } = req.body;

    const airdrop = airdrops.find(item => item.id === parseInt(id));
    if (!airdrop) return res.status(404).json({ error: 'Airdrop not found' });

    airdrop.profitGain = profitGain; // Edit the profitGain value (you can extend this)

    res.json({ message: 'Airdrop updated', airdrop });
});

// Delete Airdrop
router.delete('/delete/:id', verifyToken, (req, res) => {
    const { id } = req.params;
    airdrops = airdrops.filter(item => item.id !== parseInt(id));
    res.json({ message: 'Airdrop deleted successfully' });
});

module.exports = router;
