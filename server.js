const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://himanshigarg2006_db_user:test123@cluster0.8kdrexl.mongodb.net/cravefeed1")
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.log(err));

const express = require("express");

const app = express();

// middleware (IMPORTANT for syllabus)
app.use(express.json());

app.get("/", (req, res) => {
  res.send("CraveFeed server running 🚀");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});