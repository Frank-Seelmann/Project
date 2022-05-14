const express = require('express');
const User = require('../models/user');
const router = express.Router();

router
    .get('/', async (req, res) => {
        try {
            const users = await User.getUsers();
            res.send(users);
            console.log('router get/ ', users)
        } catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .get('/:userName', async (req, res) => {
        try {
            const user = await User.getUserByName(req.params.userName);
            res.send(user);
            console.log('router get/:userName ', user)
        } catch (err) {
            res.status(401).send({ message: err.message });
        }
    })

    .post('/login', async (req, res) => {
        try {
            const user = await User.login(req.body.username, req.body.password);
            res.send({ ...user, password: undefined });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .post('/register', async (req, res) => {
        try {
            const user = await User.register(req.body);
            res.send({ ...user, password: undefined })
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .delete('/delete', (req, res) => {
        try {
            User.deleteUser(req.body.userId);
            res.send({ success: "We'll miss you...:(" });
        } catch (error) {
            res.status(401).send({ message: error.message });
        }
    })

    .put('/edit', async (req, res) => {
        try {
          const user = await User.editUser(req.body);
          console.log(user)
          res.send({...user, password: undefined});
        } catch(error) {
          res.status(401).send({message: error.message})
        }
      })

module.exports = router;