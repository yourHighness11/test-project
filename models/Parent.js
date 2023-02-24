const { default: mongoose } = require("mongoose");

const Parent = new mongoose.Schema({
  parentName: String,
  referalBonus: [{ type: Number }],
  referalCode: String,
  userId: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});

module.exports = mongoose.model("Parent", Parent);
