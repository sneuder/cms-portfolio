import { Schema, model } from 'mongoose'
import partialEducation from './partials/education'
import partialExperience from './partials/experience'
import partialProjects from './partials/projects'

const portfolioSchema = new Schema({
  partialEducation,
  partialExperience,
  partialProjects
})

const Portfolio = model('Portfolio', portfolioSchema)
export default Portfolio