// routes/profile.js
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

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

// Get Profile (protected route)
router.get('/profile', verifyToken, (req, res) => {
    res.json({
        id: req.user.id,
        name: req.user.name,
        username: req.user.username
    });
});

// Update Profile (optional)
router.put('/profile', verifyToken, (req, res) => {
    const { name, password } = req.body;
    // Add logic to update profile information (e.g., update in the database)
    res.json({ message: 'Profile updated successfully' });
});

module.exports = router;
