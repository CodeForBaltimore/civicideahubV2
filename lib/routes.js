'use strict';

const Home = require('./controllers/home');
const Idea = require('./controllers/idea');


module.exports = [
  // We're going to define our routes here
  {
      method: 'GET',
      path: '/',
      handler: Home,
      config: {
          description: 'Gets all the ideas available'
      }
  },
  {
      method: 'POST',
      path: '/idea',
      handler: Idea.create,
      config: {
          description: 'Adds a new idea'
      }
  },
  {
      method: 'GET',
      path: '/idea/{slug}',
      handler: Idea.read,
      config: {
          description: 'Gets the content of a idea'
      }
  },
  {
      method: 'PUT',
      path: '/idea/{slug}',
      handler: Idea.update,
      config: {
          description: 'Updates the selected idea'
      }
  },
  {
      method: 'GET',
      path: '/idea/{slug}/delete',
      handler: Idea.delete,
      config: {
          description: 'Deletes the selected idea'
      }
  }
];

/**
server.route(
    {
        method: 'GET',
        path: '/',
        handler: Home,
        config: {
            description: 'Gets all the ideas available'
        }
    },
    {
        method: 'POST',
        path: '/idea',
        handler: (request, reply) => {
            reply('New idea');
        },
        config: {
            description: 'Adds a new idea'
        }
    },
    {
        method: 'GET',
        path: '/idea/{slug}',
        handler: (request, reply) => {
            reply('This is an idea');
        },
        config: {
            description: 'Gets the content of a idea'
        }
    },
    {
        method: 'PUT',
        path: '/idea/{slug}',
        handler: (request, reply) => {
            reply('Edit an idea');
        },
        config: {
            description: 'Updates the selected idea'
        }
    },
    {
        method: 'GET',
        path: '/idea/{slug}/delete',
        handler: (request, reply) => {
            reply('This idea no longer exists');
        },
        config: {
            description: 'Deletes the selected idea'
        }
    }
);
**/
