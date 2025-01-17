require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// src/server.js
app.use(cors({ origin: 'http://localhost:3000' })); // Allow frontend to make requests to backend


// Database Connection
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const profileRoutes = require('./routes/profile');
app.use('/api/user', profileRoutes);

const airdropRoutes = require('./routes/airdrops');
app.use('/api/airdrops', airdropRoutes);
