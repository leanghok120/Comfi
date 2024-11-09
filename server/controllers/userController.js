import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Card from "../models/Card.js";
import User from "../models/User.js";
import cloudinary from "../config/cloudinary.js";

async function signup(req, res) {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const defaultPfp =
      "https://cdn.discordapp.com/attachments/1140732081568223272/1304596184069046406/images.png?ex=672ff760&is=672ea5e0&hm=14bbcc725548b0d5c86f5a948f2e5934deeaf70dab5f39fb2a2f9fc5036458c3&";

    await User.create({
      pfp: defaultPfp,
      username,
      password: hashedPassword,
    });
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

async function updateMe(req, res) {
  try {
    const { username } = req.body;
    const id = req.user.id;

    if (req.file) {
      // If a new profile picture is provided, upload it to Cloudinary
      cloudinary.uploader
        .upload_stream(
          { resource_type: "auto", folder: "comfi" },
          async (error, result) => {
            if (error) return res.status(500).json("Failed to upload image");

            // Update both username and profile picture
            await User.findByIdAndUpdate(id, {
              username,
              pfp: result.secure_url,
            });

            res.json("User updated!");
          },
        )
        .end(req.file.buffer);
    } else {
      // If no profile picture is provided, only update the username
      await User.findByIdAndUpdate(id, { username });
      res.json("User updated!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export { signup, login, getMe, updateMe };
