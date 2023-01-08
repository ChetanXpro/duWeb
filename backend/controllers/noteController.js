const User = require("../models/User");
const Note = require("../models/Note");
const Collection = require("../models/Collection");
const asyncHandler = require("express-async-handler");

const getAllNotes = asyncHandler(async (req, res) => {});

const createNewNote = asyncHandler(async (req, res) => {
  const dummy = {
    collectionName: "maths",
    noteName: "A good book",
    url: "https://etc.com",
  };
  const isCollectionAlreadyExist = await Collection.findOne({
    title: dummy.collectionName,
  });

  if (isCollectionAlreadyExist)
    return res
      .status(400)
      .json({ success: false, message: "Collection already exist" });

  await Collection.create({
    user,
  });
});

const updateNote = asyncHandler(async (req, res) => {});

const deleteNote = asyncHandler(async (req, res) => {});

module.exports = {
  getAllNotes,
  createNewNote,
  updateNote,
  deleteNote,
};
