const { default: mongoose } = require("mongoose");

const User = new mongoose.Schema({
  username: String,
  password: String,
  parentId: { type: mongoose.Types.ObjectId, ref: "Parent" },
  enteredReferalCode: String,
});

module.exports = mongoose.model("User", User);
