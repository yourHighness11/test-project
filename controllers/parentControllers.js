const { default: mongoose } = require("mongoose");
const Parent = require("../models/Parent");
const User = require("../models/User");

const createParent = async (req, res) => {
  const { parentName, referalCode } = req.body;
  const addParent = new Parent({
    parentName,
    referalBonus:[],
    referalCode,
    userId: [],
  });
  await addParent.save((err, result) => res.json(result));
};

module.exports = { createParent };
