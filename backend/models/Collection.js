const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
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



module.exports = mongoose.model("Colection", schema);
