// Requiring module
const express = require('express');
// creating express object
const app = express();
// Requiring path module
const path = require('path');
const router = express.Router();

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Add the router
app.use('/', router);

// Port Number
const PORT = process.env.PORT || 3000;

// Server setup
app.listen(PORT, console.log(`Server is running on port ${PORT}`));