const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

// Dummy users (for demo)
const users = [
  { username: "prof1", password: "123", role: "professor" },
  { username: "student1", password: "123", role: "student" }
];

// Login API
app.post("/login", (req, res) => {
  const { username, password, role } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password && u.role === role
  );

  if (user) {
    res.json({ success: true, role: user.role });
  } else {
    res.json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});