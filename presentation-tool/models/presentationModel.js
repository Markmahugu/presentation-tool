const mongoose = require('mongoose');

const presentationSchema = mongoose.Schema({
  name: String,
  slides: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Slide'
  }]
});

const Presentation = mongoose.model('Presentation', presentationSchema);

module.exports = Presentation;