const express = require('express');
const axios = require('axios');
const app = express();
const port = 4006; // Your preferred port for API

// Sample endpoint for pool statistics
app.get('/stats', async (req, res) => {
  try {
    const stats = await axios.get('http://127.0.0.1:4006/ministats'); // Replace with your pool’s API URL
    res.json(stats.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching stats' });
  }
});

// Add more endpoints for miner status, payouts, etc.

app.listen(port, () => {
  console.log(`Quai Pool API listening at http://localhost:${port}`);
});
