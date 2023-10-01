const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001; // Change to the desired port number;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle requests for the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});