const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/presentation-tool', { useNewUrlParser: true });

mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});

mongoose.connection.on('error', (err) => {
  console.log(`Database error: ${err}`);
});