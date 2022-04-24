const express = require('express');
const Comment = require('../models/comment');
const router = express.Router();

router
  .get('/', (req, res) => {
    try {
      const comments = Comment.getAllComments();
      res.send(comments);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  module.exports = router;