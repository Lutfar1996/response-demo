const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Allow requests from different origins
app.use(express.json());

// Route to handle GET request
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the backend! ! ! ! Reza" });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
