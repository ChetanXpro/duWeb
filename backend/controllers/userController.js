const User = require("../models/User");
const Note = require("../models/Note");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const multer = require("multer");
const ImageModal = require("../models/Image");
const fs = require("fs");

// @ Create new user
const createNewUser = asyncHandler(async (req, res) => {
  const { role, name, email, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Al fields are require" });
  }

  const duplicates = await User.find({ email }).lean().exec();

  if (duplicates.length) {
    return res.status(409).json({
      message: "Email already exist",
    });
  }

  const hashedPwd = await bcrypt.hash(password, 10);

  const userObject = { email, password: hashedPwd };

  const user = await User.create(userObject);

  if (!user) res.status(200).json({ messssage: `Invalid user data recevied` });

  res.status(201).json({ messssage: `New user ${email} created` });
});

// @ Update user
const updateUser = asyncHandler(async (req, res) => {
  const { id, username, cid } = req.body;

  if (!id || !username || !id) {
    return res
      .status(400)
      .json({ message: "All fields except password are required" });
  }
  // Does the user exist to update?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  // Check for duplicate
  const foundUser = await User.findOne({ username }).lean().exec();

  foundUser.cid = cid;

  const updatedUser = await foundUser.save();

  res.json({ message: `${updatedUser.username} updated` });
});

// @ Deete user
const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;

  // Confirm data
  if (!id) {
    return res.status(400).json({ message: "User ID Required" });
  }

  // Does the user still have assigned notes?
  const note = await Note.findOne({ user: id }).lean().exec();
  if (note) {
    return res.status(400).json({ message: "User has assigned notes" });
  }

  // Does the user exist to delete?
  const user = await User.findById(id).exec();

  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const result = await user.deleteOne();

  const reply = `Username ${result.username} with ID ${result._id} deleted`;

  res.json(reply);
});

module.exports = {
  getAllUser,
  createNewUser,
  updateUser,
  deleteUser,
  uploadImage,
  getImage,
};
