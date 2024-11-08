import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Card from "../models/Card.js";
import User from "../models/User.js";

async function signup(req, res) {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await User.create({ username, password: hashedPassword });
    res.json("User created!");
  } catch (err) {
    res.status(500).json(err);
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json("User does not exist!");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(403).json("Invalid credentials!");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json(token);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getMe(req, res) {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const posts = await Card.find({ userId: user.id });
    res.json({ user, posts });
  } catch (err) {
    res.status(500).json(err);
  }
}

export { signup, login, getMe };
