const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
  mobile: String,
  state: String,
  country: String,
  gender: String,
  age: Number,
  guideCode: String,
});
module.exports = mongoose.model("User", userSchema);
