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
  .post('/create', async (req, res) => {
    try {
      const comment = await Comment.createComment(req.body);
      res.send(comment);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .put('/update/:commentId', async (req, res) => {
    try {
      const comment = await Comment.updateComment(req.params.commentId, req.body);
      res.send(comment);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  .delete('/delete/:commentId', async (req, res) => {
    try {
      const comment = await Comment.deleteComment(req.params.commentId);
      res.send(comment);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })



  module.exports = router;