const mongoose = require("mongoose");

const postScoresSchema = new mongoose.Schema({
  _id: { type: Number },
  round: { type: Number },
  finalScore1: { type: Number },
  finalScore2: { type: Number },
});

module.exports = mongoose.model("Results", postScoresSchema);
