import { Schema, model } from 'mongoose'

const portfolioSchema = new Schema({})
const Portfolio = model('Portfolio', portfolioSchema)

export default Portfolio