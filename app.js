const express = require('express');
const dotenv = require('dotenv');
const bfhlRoutes = require('./routes/bfhlRoutes');

// Initialize dotenv to use environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Routes
app.use('/bfhl', bfhlRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


