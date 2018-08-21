'use strict';

// Import the index.js file inside the models directory
const Models = require('./lib/models/');

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');
const Path = require('path');

// creating the server
const server = new Hapi.Server({
  host: 'localhost',
  port: 4000
})

server.route(Routes);

// Ali: The code is below is my attempt to connect the front-end with our server

// server.register([
//   require('vision')
// ], (err) => {
//   Hoek.assert(!err, err);
//
//   // View settings
//   server.views({
//     engines: {
//         pug: require('pug'),
//         jsx: require('hapi-react-views')
//     },
//     path: Path.join(__dirname, 'lib/views'),
//     compileOptions: {
//       pretty: false
//     },
//     isCached: Settings.env === 'production'
//   });
//
//   // Add routes
//   server.route(Routes);
// });


// This synchronizes the database with changes operated.

Models.sequelize.sync().then(() => {
  server.start((err) => {
    Hoek.assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);
  });
});
