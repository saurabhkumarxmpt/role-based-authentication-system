require('dotenv').config;
const express = require('express');
const port=process.env.PORT;
const app = express();

// middleware
app.use(express.json());

// route
app.get('/', (req, res) => {
  res.json({ message: "this is server" });
});

// server listen
app.listen(port, () => {
  console.log("Server is running on port 5000");
});

