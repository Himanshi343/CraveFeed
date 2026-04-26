const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const router = express.Router();

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

module.exports = router;