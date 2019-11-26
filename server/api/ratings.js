const router = require('express').Router()
const {Ratings} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const ratings = await Ratings.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['movieId', 'review', 'rating', 'userId']
    })
    res.json(ratings)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    // const movie = await Ratings.findorCreate({
    //   where: {
    //     movieId: req.body.movieId
    //   }
    // })
    const {movieId, rating, review} = req.body
    await Ratings.create({movieId, rating, review})
    res.json({body: req.body})
  } catch (err) {
    next(err)
  }
})
