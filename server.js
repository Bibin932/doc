const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Serve files from the project root
app.use(express.static(__dirname));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'CyberCodix Help Center'
  });
});

// Serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`CyberCodix Help Center running on port ${PORT}`);
});
