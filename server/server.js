const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", authRoutes);

mongoose.connect("mongodb+srv://himanshigarg2006_db_user:test123@cluster0.8kdrexl.mongodb.net/cravefeed1")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("CraveFeed server running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});