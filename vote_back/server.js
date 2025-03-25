const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./Models/User");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/OC", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB error:", err));

// Register User
app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.send("User registered");
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error (username already exists)
      res.status(400).send("Username already exists");
    } else {
      console.error("Error registering user:", err);
      res.status(500).send("Error registering user");
    }
  }
});

// Read Users under Register path
app.get("/register/read", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    res.status(500).send("Error fetching users");
  }
});
// Login User
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne(req.body);
    if (user) {
      res.json({
        success: true,
        data: user, // Send user data as a response
      });
    } else {
      res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
  } catch (err) {
    res.status(500).send("Error logging in");
  }
});

// Update User
app.put("/update/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("User updated");
  } catch (err) {
    res.status(500).send("Error updating user");
  }
});

// Delete User
app.delete("/delete/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted");
  } catch (err) {
    res.status(500).send("Error deleting user");
  }
});

// Server listener
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
