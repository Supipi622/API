require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const app = express();

// Get the API_KEY from the environment variables
const API_KEY = process.env.API_KEY;


// Middleware to validate the API key
app.use((req, res, next) => {
    const apiKey = req.query.apiKey;
    if (apiKey !== API_KEY) {
        console.log(`Unauthorized access attempt: ${req.ip}`);
        return res.status(401).json({ error: 'Unauthorized: Invalid API key' });
    }
    next();
});

// API endpoint
app.get('/greet', (req, res) => {
  const name = req.query.name || 'World';
  res.json({ message: `Hello, ${name}!` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
