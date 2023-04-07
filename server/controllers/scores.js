const Scores = require("../models/Scores");

const create = (req, res) => {
  try {
    console.log(req.body);
    const scores = Scores.create(req.body);
    res.status(200).send(`This was created: ${scores}`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create };
