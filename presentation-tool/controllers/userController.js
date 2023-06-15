const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).json({
        message: 'Error getting users',
        error: err
      });
    } else {
      res.status(200).json(users);
    }
  });
});

router.post('/', (req, res) => {
  let newUser = new User({
    name: req.body.name
  });

  newUser.save((err, user) => {
    if (err) {
      res.status(500).json({
        message: 'Error saving user',
        error: err
      });
    } else {
      res.status(201).json(user);
    }
  });
});

router.get('/:id', (req, res) => {
  User.findOne({
    _id: req.params.id
  }, (err, user) => {
    if (err) {
      res.status(500).json({
        message: 'Error getting user',
        error: err
      });
    } else {
      res.status(200).json(user);
    }
  });
});

router.put('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, {
    name: req.body.name
  }, {
    new: true
  }, (err, user) => {
    if (err) {
      res.status(500).json({
        message: 'Error updating user',
        error: err
      });
    } else {
      res.status(200).json(user);
    }
  });
});

router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        message: 'Error deleting user',
        error: err
      });
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;