const Results = require("../models/Results");
// const theResults = require("../data/results");

const postResults = async (req, res) => {
  try {
    console.log(req.body);
    const scores = await Results.create(req.body);
    res.status(201).send(`This was created: ${scores}`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { postResults };
