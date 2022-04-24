const express = require('express');
const Profiles = require('../models/profile');
const router = express.Router();

router
  .get('/', (req, res) => {
    try {
      const profiles = Profiles.getAllProfiles();
      res.send(profiles);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  module.exports = router;