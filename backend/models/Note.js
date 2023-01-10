const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    collectionID: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "Collection",
    },
    name: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Note", schema);
