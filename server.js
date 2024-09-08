const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve static files from 'static' directory
app.use('/static', express.static(path.join(__dirname, 'static')));

// Use environment variable PORT or default to 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
