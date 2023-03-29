const User = require("../models/User");

const register = async (req, res) => {
  try {
    const { username } = req.body;
    const user = await User.create(req.body);
    res.status(200).send(`user ${username} created`);
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.find({ username: username });
    res.status(200).send(`user ${user} found`);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { register, login };
