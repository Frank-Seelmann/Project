const express = require('express');
const Project = require('../models/project');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const projects = await Project.getAllProjects();
      res.send(projects);
      console.log('router get/ ', projects)
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  })
  .get('/:id', async (req, res) => {
    try {
      const project = await Project.getProjectById(req.params.id);
      res.send(project);
      console.log('router get/:id ', project)
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