'use strict';

// Import the index.js file inside the models directory
const Models = require('./lib/models/');

const Hapi = require('hapi');
const Hoek = require('hoek');
const Settings = require('./settings');
const Routes = require('./lib/routes');

const server = new Hapi.Server({
  host: 'localhost',
  port: 4000
})
//server.connection({ port: Settings.port });

server.route(Routes);

Models.sequelize.sync().then(() => {
  server.start((err) => {
    Hoek.assert(!err, err);
    console.log(`Server running at: ${server.info.uri}`);
  });
});
