const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");

const app = express();   // ✅ FIRST create app

app.use(express.json()); // ✅ middleware

app.use(authRoutes);     // ✅ THEN use routes

mongoose.connect("mongodb+srv://himanshigarg2006_db_user:test123@cluster0.8kdrexl.mongodb.net/cravefeed1")
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("CraveFeed server running 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});