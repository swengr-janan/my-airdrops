// models/Airdrop.js
const mongoose = require("mongoose");

const AirdropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  recipient: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Airdrop = mongoose.model("Airdrop", AirdropSchema);
module.exports = Airdrop;
