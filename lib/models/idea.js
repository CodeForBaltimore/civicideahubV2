'use strict';

const Moment = require('moment');

module.exports = (sequelize, DataTypes) => {
  let Idea = sequelize.define('Idea', {
    created_date: { // To do: set up as date of creation
      type: DataTypes.DATE,
      get: function () {
        return Moment(this.getDataValue('date')).format('MMMM Do, YYYY');
      }
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    description: DataTypes.STRING,
    content: DataTypes.STRING
  });

  return Idea;
};
