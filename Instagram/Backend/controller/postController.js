const Post = require("../model/Post");

const createPost = async (req, res) => {
  try {
    const { caption } = req.body;
    const imageUrl = req.file ? req.file.path : null;
    if (!imageUrl || !caption) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    const post = new Post({
      user: req.user.id,
      imageUrl,
      caption,
    });
    await post.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUserPosts = async (req, res) => {
    try {
        const posts = await Post.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
