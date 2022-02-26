const Sequelize = require('sequelize')
const db = require('../db')

const Ratings = db.define('ratings', {
  movieId: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  review: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.INTEGER
  }
})

module.exports = Ratings
