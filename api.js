const express = require("express");
const app = express();
const PORT = 3000;
const api_num = 200;
//this is for 200 for team helper others will be uploaded soon

// Define some sample data
const data = [
  { id: 1, name: "name1" },
  { id: 2, name: "name2" },
  { id: 3, name: "name3" },
];

// Define a route to get all data
app.get("/api/data", (req, res) => {
  res.json(data);
});

// Define a route to get data by ID
app.get("/api/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = data.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
