const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const presentationController = require('./controllers/presentationController');
const userController = require('./controllers/userController');

mongoose.connect('mongodb://localhost/presentation-tool', { useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/presentation', presentationController);
app.use('/user', userController);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});