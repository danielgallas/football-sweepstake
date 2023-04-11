const express = require("express");
const router = express.Router();
const { create, getData } = require("../controllers/scores");

router.route("/").post(create);
router.route("/:user").get(getData);

module.exports = router;
