const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'interface.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});