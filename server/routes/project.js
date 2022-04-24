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

module.exports = router;