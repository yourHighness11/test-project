const express = require("express");
const {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userControllers");
const router = express.Router();

router.post("/createuser", createUser);
router.get("/getuser", getAllUsers);
router.put("/updateuser/:uid", updateUser);
router.delete("/deleteuser/:uid", deleteUser);
module.exports = router;
