const express = require("express");
const Projects = require("./project-model");
const Tasks = require("../tasks/task-model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const projects = await Projects.findProjects();
    const recievedProjects = projects.map(project => {
      return {
        ...project,
        completed: project.completed === 0 ? false : true
      };
    });
    res.status(200).json(recievedProjects);
  } catch (error) {
    res.status(500).json({ error: "Projects could not be retrieved." });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const project = await Projects.findById(id);
    if (!project)
      return res
        .status(404)
        .json(`project with id of ${id} could not be found`);
    res
      .status(200)
      .json({ ...project, completed: project.completed === 0 ? false : true });
  } catch (error) {
    res.status(500).json({ error: "Project could not be retrieved." });
  }
});

router.post("/", async (req, res) => {
  const projectData = req.body;

  if (!req.body)
    return res.status(400).json({
      errorMessage: "Please provide required info."
    });
  try {
    const project = await Projects.add(projectData);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: "Failed to create new project" });
  }
});

// Tasks
router.get("/:id/tasks", async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Tasks.findTasks(id);
    const transformedTasks = tasks.map(task => {
      return {
        ...task,
        completed: task.completed === 0 ? false : true
      };
    });
    res.status(200).json(transformedTasks);
  } catch (error) {
    res.status(500).json({ error: "Task not found" });
  }
});

router.post("/:id/tasks", async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  try {
    const projects = await Projects.findById(id);
    if (!projects) {
      return res.status(404).json({ message: "Invalid Project ID" });
    }
    if (!task.description) {
      return res.status(404).json({ message: "Task description missing" });
    }
    const count = await Tasks.add(task, id);
    res.status(201).json(count);
  } catch (error) {
    res.status(500).json({ error: "Error adding task" });
  }
});

module.exports= router;
