const Project = require("../Modal/Project");

// Create Project
module.exports.create = async (req, res) => {
  try {
    const { name, code } = req.body;

    // Basic Validation
    if (!name || !code) {
      return res.status(400).json({ error: "Name and code are required" });
    }

    const project = new Project({ name, code });
    await project.save();

    res.status(201).json({
      message: "Project created successfully 😍",
      project,
    });

  } catch (error) {
    console.error("❌ Create project error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get All Projects
module.exports.getAll = async (req, res) => {
  try {
    const projects = await Project.find();
    
    if (projects.length === 0) {
      return res.status(404).json({ message: "No projects found 😢" });
    }

    res.status(200).json({
      message: "Projects fetched successfully 😎",
      projects,
    });

  } catch (error) {
    console.error("❌ Get all projects error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
