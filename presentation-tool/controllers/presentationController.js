const express = require('express');
const router = express.Router();
const Presentation = require('../models/presentationModel');

router.get('/', (req, res) => {
  Presentation.find({}, (err, presentations) => {
    if (err) {
      res.status(500).json({
        message: 'Error getting presentations',
        error: err
      });
    } else {
      res.status(200).json(presentations);
    }
  });
});

router.post('/', (req, res) => {
  let newPresentation = new Presentation({
    name: req.body.name,
    slides: req.body.slides
  });

  newPresentation.save((err, presentation) => {
    if (err) {
      res.status(500).json({
        message: 'Error saving presentation',
        error: err
      });
    } else {
      res.status(201).json(presentation);
    }
  });
});

router.get('/:id', (req, res) => {
  Presentation.findOne({
    _id: req.params.id
  }, (err, presentation) => {
    if (err) {
      res.status(500).json({
        message: 'Error getting presentation',
        error: err
      });
    } else {
      res.status(200).json(presentation);
    }
  });
});

router.put('/:id', (req, res) => {
  Presentation.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    slides: req.body.slides
  }, {
    new: true
  }, (err, presentation) => {
    if (err) {
      res.status(500).json({
        message: 'Error updating presentation',
        error: err
      });
    } else {
      res.status(200).json(presentation);
    }
  });
});

router.delete('/:id', (req, res) => {
  Presentation.findByIdAndDelete(req.params.id, (err) => {
    if (err) {
      res.status(500).json({
        message: 'Error deleting presentation',
        error: err
      });
    } else {
      res.sendStatus(204);
    }
  });
});

module.exports = router;