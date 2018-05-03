const mongoose = require('mongoose');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;

//const dbURI = 'mongodb://localhost:27017/test_nodeapi';
const dbURI = 'mongodb://localhost:27017/mernApi';

// connecting mongoose to our db
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};
mongoose.connect(dbURI, options);

// connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection successfully on ' + dbURI);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error' + err);
});
