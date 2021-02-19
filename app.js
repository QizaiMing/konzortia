import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { moviesRoute } from './routes/movies.js'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/movie', moviesRoute)

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(3000)
