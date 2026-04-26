const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

// ✅ REGISTER
router.post("/register", async (req, res) => {
  const { firstName, lastName, email, phone, password, role } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.send("User already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashed,
      role
    });

    await user.save();

    res.send("Registered successfully");
  } catch (err) {
    res.send("Error");
  }
});

// ✅ LOGIN (paste BELOW register)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.send("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.send("Wrong password");

    res.send("Login successful");
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;