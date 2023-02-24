const Parent = require("../models/Parent");
const User = require("../models/User");

const createUser = async (req, res) => {
  const { username, password, enteredReferalCode, parentId } = req.body;
  const addUser = new User({
    username,
    password,
    parentId,
    enteredReferalCode,
  });
  try {
    let parent = await Parent.findById(parentId).exec();
    await addUser.save();
    console.log(parent.referalCode);
    if (parent.referalCode === enteredReferalCode) {
      parent.referalBonus.push(100);
    }

    await parent.userId.push(addUser);
    await parent.save((_err, results) => {
      res.json(results);
    });
  } catch (error) {}
};

const getAllUsers = async (_req, res) => {
  await User.find({}, function (err, results) {
    res.json(results);
  })
    .clone()
    .catch((err) => console.log(err));
};

const updateUser = async (req, res) => {
  const uid = req.params.uid;
  const { username, password } = req.body;
  await User.findByIdAndUpdate(uid, { username, password }, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.json("User updated");
    }
  }).clone();
};

const deleteUser = async (req, res) => {
  const uid = req.params.uid;
  await User.findByIdAndDelete(uid).exec((err) => {
    res.json("user deleted");
  });
};

module.exports = { createUser, getAllUsers, updateUser, deleteUser };
