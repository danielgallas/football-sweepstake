const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/auth");

router.get("/createuser", createUser);

module.exports = router;
