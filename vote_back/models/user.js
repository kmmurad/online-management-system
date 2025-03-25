const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  nationalId: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
});

module.exports = mongoose.model("User", userSchema);
