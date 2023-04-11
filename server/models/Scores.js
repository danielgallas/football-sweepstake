const mongoose = require("mongoose");

const scoresSchema = new mongoose.Schema({
  scores: { type: Array },
  user: { type: String },
  suarez: { type: Number },
  posicao: { type: Number },
  isLoading: { type: Boolean },
});

module.exports = mongoose.model("Scores", scoresSchema);
