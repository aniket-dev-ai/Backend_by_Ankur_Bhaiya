const express = require("express");
const { createPost, getUserPosts } = require("../controller/postController");
const { auth } = require("../middleware/authMiddleware"); // Fixed Import
const multerObj = require("../middleware/MulterMiddleware"); // Fixed Import

const router = express.Router();

router.post("/create-post", auth, multerObj.single("post"), createPost);
router.get("/my-posts", auth, getUserPosts);

module.exports = router;
