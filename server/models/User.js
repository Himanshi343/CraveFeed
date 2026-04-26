const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "restaurant"],
    default: "user"
  }
});

module.exports = mongoose.model("User", userSchema);