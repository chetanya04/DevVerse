const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema({
    category: String,
    details: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  });
module.exports = mongoose.model("Problem", ProblemSchema);
