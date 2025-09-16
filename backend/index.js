// Load environment variables from the .env file
require('dotenv').config();

// Import the express framework
const express = require('express');
const app = express();

const user=require('./routes/userRoute');

// Define the port (from .env or default to 5000)
const PORT = process.env.PORT || 5000;

// Import the database connection file
const database = require('./config/database');

// Middleware to parse JSON data in request body
app.use(express.json());

// Connect to the database
database();
app.use('/api/user',user);
// Define a simple test route
app.get('/', (req, res) => {
    res.json({ message: 'This is simple server' });
});

// Start the server and listen on the given port
app.listen(PORT, (error) => {
    if (error) {
        console.error('Something went wrong while starting the server');
    } else {
        console.info(`Server is running on port ${PORT}`);
    }
});
