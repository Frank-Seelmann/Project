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
  .post('/create', async (req, res) => {
    try {
      const profile = await Profiles.createProfile(req.body);
      res.send(profile);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .put('/update/:profileId', async (req, res) => {
    try {
      const profile = await Profiles.updateProfile(req.params.profileId, req.body);
      res.send(profile);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  module.exports = router;