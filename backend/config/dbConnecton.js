const mongoose = require("mongoose");
const logger = require("./logger");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, () => {
      logger.info("Database connected");
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
