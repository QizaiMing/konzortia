import express from 'express'
import { Classification } from '../models/Classification.js'

export const classificationsRoute = express.Router()

classificationsRoute.get('/list', async (req, res) => {
  try {
    const classifications = await Classification.find()
    res.json(classifications)
  } catch (err) {
    res.json({ message: err })
  }
})

classificationsRoute.post('/create', async (req, res) => {
  const classification = new Classification({
    name: req.body.name
  })

  try {
    const savedClassification = await classification.save()
    res.json(savedClassification)
  } catch (err) {
    res.json({ message: err })
  }
})

classificationsRoute.get('/:classificationId', async (req, res) => {
  try {
    const classification = await Classification.findById(
      req.params.classificationId
    )
    res.json(classification)
  } catch (err) {
    res.json({ message: err })
  }
})

classificationsRoute.delete('/delete/:classificationId', async (req, res) => {
  try {
    const removedClassification = await Classification.remove({
      _id: req.params.classificationId
    })
    res.json(removedClassification)
  } catch (err) {
    res.json({ message: err })
  }
})

classificationsRoute.put('/update/:classificationId', async (req, res) => {
  try {
    const updatedClassification = await Classification.updateOne(
      { _id: req.params.classificationId },
      {
        $set: {
          name: req.body.name
        }
      }
    )
    res.json(updatedClassification)
  } catch (err) {
    res.json({ message: err })
  }
})
