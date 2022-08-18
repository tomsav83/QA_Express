const router = require('express').Router()

const Tune = require('../db')

// let tunes = [
//   {
//     title: 'Mono',
//     artist: 'BEAK>',
//     length: 3.09,
//     rating: 9,
//   },
// ]

router.post('/createTune', (req, res, next) => {
  console.log('BODY:', req.body)
  if (!req.body || Object.keys(req.body).length < 1)
    return next({ status: 400, message: 'No body' })

  Tune.create(req.body)
    .then((result) => res.status(201).json(result))
    .catch((err) => next(err))
})

router.get('/getAllTunes', (req, res, next) => {
  Tune.find()
    .then((results) => res.json(results))
    .catch((err) => next(err))
})

router.get('/getTune/:id', (req, res, next) => {
  console.log('PARAMS:', req.params)
  const { id } = req.params
  if (id === null || id === undefined)
    return next({ status: 400, message: 'missing id' })

  Tune.findById(id)
    .then((result) => res.json(result))
    .catch((err) => next(err))
})

router.patch('/updateTune/:id', (req, res, next) => {
  console.log('PARAMS:', req.params)
  console.log('QUERY:', req.query)

  const { title, artist, length, rating } = req.query
  const { id } = req.params

  Tune.findByIdAndUpdate(id, req.query)
    .then((result) => res.json(result))
    .catch((err) => next(err))
})

router.delete('/removeTune/:id', (req, res, next) => {
  console.log('PARAMS:', req.params)

  Tune.findByIdAndDelete(req.params.id)
    .then(() => res.status(204).send())
    .catch((err) => next(err))
})

module.exports = router
