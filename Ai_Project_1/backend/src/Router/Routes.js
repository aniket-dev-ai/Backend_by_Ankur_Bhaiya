const router = require("express").Router();
const ProjectController = require("../Coontroller/Project");

router.post("/create", ProjectController.create);
router.get("/getAll", ProjectController.getAll);

module.exports = router;
