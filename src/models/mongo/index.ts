import { Schema, model } from 'mongoose'

const portfolioSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
})

const Portfolio = model('Portfolio', portfolioSchema)

export default Portfolio