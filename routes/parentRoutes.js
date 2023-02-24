const express = require("express");
const { createParent } = require("../controllers/parentControllers");
const router = express.Router();

router.post("/createparent", createParent);
module.exports = router;
