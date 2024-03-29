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
    const scores = await Scores.findOne({ user: req.params.user });
    res.status(200).json({ scores });
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateAllData = async (req, res) => {
  try {
    const scores = await Scores.findOneAndReplace(
      { user: req.params.user },
      req.body
    );
    // console.log(scores);
    // console.log(req.body);
    res.status(200).json({ scores });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllData = async (req, res) => {
  try {
    const scores = await Scores.find({});
    res.status(200).json({ scores });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { create, getData, getAllData, updateAllData };
