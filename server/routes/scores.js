const express = require("express");
const router = express.Router();
const { create, getData, getAllData } = require("../controllers/scores");

router.route("/").get(getAllData).post(create);
router.route("/:user").get(getData);

module.exports = router;
