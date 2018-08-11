'use strict';

const Models = require('../models/');

module.exports = (request, reply) => {
  Models.Idea
    .findAll({
    })
    .then((result) => {
      reply({
        data: {
          notes: result
        },
        page: 'Home—Ideas Board',
        description: 'Welcome to my Ideas Board'
      });
    });
};
