const Scores = require("../models/Scores");

const create = async (req, res) => {
  try {
    console.log(req.body);
    const scores = await Scores.create(req.body);
    res.status(201).send(`This was created: ${scores}`);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getData = async (req, res) => {
  try {
    // console.log(req.params.user);
    const scores = await Scores.findOne({ user: req.params.user });
    res.status(200).json({ scores });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create, getData };
