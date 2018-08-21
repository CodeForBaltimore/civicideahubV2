'use strict';

const Models = require('../models/');
const Slugify = require('slug');
const Path = require('path');

module.exports = {
  // Here we're going to include our functions that will handle each request in the routes.js file.
  create: (request, reply) => {
      Models.Idea
      .create({
          date: new Date(),
          title: request.payload.ideaTitle,
          slug: Slugify(request.payload.ideaTitle, {lower: true}),
          description: request.payload.ideaDescription,
          content: request.payload.ideaContent
      })
        .then((result) => {
            // We're going to generate a view later, but for now lets just return the result.
            reply(result);
        });
    },
    read: (request, reply) => {
        Models.Idea
        .findOne({
            where: {
                slug: request.params.slug
            }
        })
        .then((result) => {
            reply(result);
        });
    },
    update: (request, reply) => {
        const values = {
            title: request.payload.ideaTitle,
            description: request.payload.ideaDescription,
            content: request.payload.ideaContent
        };
        const options = {
            where: {
                slug: request.params.slug
            }
        };
        Models.Idea
        .update(values, options)
        .then(() => {
            Models.Note
            .findOne(options)
            .then((result) => {
                reply(result);
            });
        });
    },
    delete: (request, reply) => {
        Models.Idea
        .destroy({
            where: {
                slug: request.params.slug
            }
        })
        .then(() => reply.redirect('/'));
    }
};
