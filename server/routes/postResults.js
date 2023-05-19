const express = require("express");
const router = express.Router();
const { postResults } = require("../controllers/postResults");

router.route("/").post(postResults);

module.exports = router;
