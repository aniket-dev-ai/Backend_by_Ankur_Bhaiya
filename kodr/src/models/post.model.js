const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  media: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
});

const PostModel = mongoose.model("Post", postSchema);
module.exports = PostModel;
