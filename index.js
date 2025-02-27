require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// CORS configuration to allow access from https://shiden-stream.onrender.com
const corsOptions = {
    origin: 'https://shiden-stream.onrender.com', // Allow this specific domain
    methods: ['GET', 'POST'],  // Methods that are allowed
    allowedHeaders: ['Content-Type', 'Authorization'],  // Headers that are allowed
    credentials: true,  // Allow cookies or other credentials
};

// Middleware
app.use(cors(corsOptions)); // Use the customized CORS options
app.use(express.static('public')); // Serve frontend files

// API route to serve Jitsi API key securely
app.get('/api/jitsi-key', (req, res) => {
    console.log(process.env.JITSI_API_KEY);
    res.json({ apiKey: process.env.JITSI_API_KEY });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
