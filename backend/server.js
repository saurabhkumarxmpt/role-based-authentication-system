require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// route
app.get('/', (req, res) => {
  res.json({ message: "this is server" });
});

// server listen
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
