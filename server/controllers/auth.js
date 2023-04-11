const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username } = req.body;
    const checkUser = await User.findOne({ username: username });
    if (checkUser) {
      res.status(401).send({ message: "User with this name already exists" });
      return;
    } else {
      const user = await User.create(req.body);
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).send({ message: "No such user in our database" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send({ message: "Wrong password" });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { register, login };
