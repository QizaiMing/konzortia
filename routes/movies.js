import express from 'express'
import { Movie } from '../models/Movie.js'

export const moviesRoute = express.Router()

moviesRoute.get('/list', async (req, res) => {
  try {
    const movies = await Movie.find()
    res.json(movies)
  } catch (err) {
    res.json({ message: err })
  }
})

moviesRoute.post('/create', async (req, res) => {
  const movie = new Movie({
    name: req.body.name,
    director: req.body.director,
    classification: req.body.classification
  })

  try {
    const savedMovie = await movie.save()
    res.json(savedMovie)
  } catch (err) {
    res.json({ message: err })
  }
})

moviesRoute.get('/:movieId', async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId)
    res.json(movie)
  } catch (err) {
    res.json({ message: err })
  }
})

moviesRoute.delete('/delete/:movieId', async (req, res) => {
  try {
    const removedMovie = await Movie.remove({ _id: req.params.movieId })
    res.json(removedMovie)
  } catch (err) {
    res.json({ message: err })
  }
})

moviesRoute.put('/update/:movieId', async (req, res) => {
  try {
    const updatedMovie = await Movie.updateOne(
      { _id: req.params.movieId },
      {
        $set: {
          name: req.body.name,
          director: req.body.director,
          classification: req.body.classification
        }
      }
    )
    res.json(updatedMovie)
  } catch (err) {
    res.json({ message: err })
  }
})
