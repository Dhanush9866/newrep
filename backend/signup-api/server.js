const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const BDurl = MONGODBURL;

dotenv.config();
const app = express();
app.use(express.json()); 
const cors = require("cors");
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
})); 
mongoose.connect(BDurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB Error:", err));

app.use("/api", authRoutes);
app.listen(8001, () => console.log(`Server running on port ${8001}`));

