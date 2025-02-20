const express = require("express");

const postController = require("../controllers/post.controller");
const userMiddleware = require("../middlewares/user.middleware");

const router = express.Router();

// router.get('/', postController.getPosts);
router.post("/create", userMiddleware , postController.createPost);

module.exports = router;