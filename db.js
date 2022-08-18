const mongoose = require('mongoose')

mongoose.connect(
  'mongodb://localhost:27017/tunes',
  { useNewUrlParser: true },
  (err) => {
    if (err) return console.error(err)
    return console.log('connection successful')
  }
)

const { Schema } = mongoose

// creating entity (structure)
const tuneSchema = new Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 99,
  },
  artist: {
    type: String,
    required: true,
    min: 1,
    max: 99,
  },
  length: {
    type: Number,
    required: true,
    min: 2,
    max: 99,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 99,
  },
})

const Tune = mongoose.model('tune', tuneSchema)

module.exports = Tune
