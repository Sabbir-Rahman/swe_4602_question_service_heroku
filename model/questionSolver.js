const mongoose = require('mongoose')

//this is for replicating required

const questionService = mongoose.Schema({
  description: String,
  tag: String,
  point: Number,
  options: [String]
})

module.exports = mongoose.model('questionService', questionService)
