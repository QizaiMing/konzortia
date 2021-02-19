import mongoose from 'mongoose'

const MovieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  classification: {
    type: String,
    required: true
  }
})

export const Movie = mongoose.model('Movie', MovieSchema)
