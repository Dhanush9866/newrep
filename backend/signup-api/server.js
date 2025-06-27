const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const BDurl = //add the database url here;

dotenv.config();
const app = express();
app.use(express.json()); 
const cors = require("cors");
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
})); 
mongoose.connect(BDurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error:", err));

app.use("/api", authRoutes);





 
app.listen(8001, () => console.log(`Server running on port ${8000}`));

