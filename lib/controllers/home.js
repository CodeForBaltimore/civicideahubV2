'use strict';

const Models = require('../models/');

module.exports = (request, reply) => {
  Models.Idea
    .findAll({
    })
    .then((result) => {
        reply.view('home', {
            data: {
                ideas: result
            },
            page: 'Home-Ieas Board',
            description: 'Welcome to my Ideas Board'
        });
    });
};
