const User = require("../models/User");
const Note = require("../models/Note");
const Collection = require("../models/Collection");
const asyncHandler = require("express-async-handler");

const getAllNotes = asyncHandler(async (req, res) => {});

// Create collection
const createCollection = asyncHandler(async (req, res) => {
  const { collectionName } = req.body;
  if (!collectionName)
    return res.status(400).json({ success: true, message: "Invalid input" });
  const isCollectionAlreadyExist = await Collection.findOne({
    title: collectionName,
    user: req.id,
  });

  if (isCollectionAlreadyExist)
    return res
      .status(400)
      .json({ success: false, message: "Collection already exist" });

  await Collection.create({
    user: req.id,
    title: collectionName,
  });

  res
    .status(200)
    .json({ success: true, message: `${collectionName} collection created` });
});

const getCollectionList = asyncHandler(async (req, res) => {
  const id = req.id;

  if (!id)
    return res
      .status(400)
      .json({ success: false, message: "Something went wrong" });

  const collectionFound = await Collection.find({ user: id }).lean();

  const arr = collectionFound.map((i) => {
    const obj = {
      lable: i.title,
      value: i.title,
      totalNotesInside: i.totalNotesInside,
    };
    return obj;
  });
  console.log(arr);

  res.status(200).json({ arr });
});

// Create notes
const createNotes = asyncHandler(async (req, res) => {
  const { collectionName, noteName, url } = req.body;
  if (typeof (collectionName || noteName || url) !== "string")
    return res.status(400).json({ success: false, message: "Invalid data" });

  const collectionFound = await Collection.findOne({ title: collectionName });

  if (!collectionFound)
    return res.status(400).json({
      success: false,
      message: `${collectionName} Collection does not exist`,
    });

  await Note.create({
    name: noteName,
    url,
    collectionID: collectionFound._id,
  });

  await collectionFound.updateOne({ $inc: { totalNotesInside: +1 } });

  res.status(200).json({ success: true, message: "Note Uploaded" });
});

const updateNote = asyncHandler(async (req, res) => {});

const deleteNote = asyncHandler(async (req, res) => {});

module.exports = {
  getAllNotes,
  createCollection,
  updateNote,
  deleteNote,
  getCollectionList,
  createNotes,
};
