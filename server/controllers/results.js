const Results = require("../models/Results");

const getResults = async (req, res) => {
  try {
    const results = await Results.find();
    res.status(200).json({ results });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { getResults };
