import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import { moviesRoute } from './routes/movies.js'
import { classificationsRoute } from './routes/classifications.js'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/movie', moviesRoute)
app.use('/api/classification', classificationsRoute)

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.listen(process.env.PORT)
