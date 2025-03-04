const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
    },
    code: {
      type: String,
      required: [true, "Project code is required"],
      trim: true,
    },
  },
  { timestamps: true }
); // Yeh timestamps feature add kiya hai

module.exports = mongoose.model("Project", projectSchema);
