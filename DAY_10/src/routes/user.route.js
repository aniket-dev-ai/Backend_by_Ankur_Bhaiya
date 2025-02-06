const express = require('express');
const router = express.Router();

const userController = require('../controller/index.controller');

router.get('/', userController.Homepage);
router.get('/form', userController.PostForm);
router.post('/submit', userController.postRegisterController);


module.exports = router;