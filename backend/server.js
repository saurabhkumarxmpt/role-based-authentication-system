const express = require('express'); // require use karo
const app = express();

// middleware
app.use(express.json());

// route
app.get('/', (req, res) => {
  res.json({ message: "this is server" });
});

// server listen
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

