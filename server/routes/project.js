const express = require('express');
const Project = require('../models/project');
const router = express.Router();

router
  .get('/', (req, res) => {
    try {
      const projects = Project.getAllProjects();
      res.send(projects);
      console.log(projects)
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })
  .post('/create', async (req, res) => {
    try {
      const project = await Project.createProject(req.body);
      res.send(project);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })
  .delete ('/delete/:projectId', async (req, res) => {
    try {
      const project = await Project.deleteProject(req.params.projectId);
      res.send(project);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })

module.exports = router;