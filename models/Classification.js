import mongoose from 'mongoose'

const ClassificationSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

export const Classification = mongoose.model(
  'Classification',
  ClassificationSchema
)
