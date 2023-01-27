import { Schema } from 'mongoose'

const partialProjects = new Schema({
  projects: [{
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    resources: {
      gitHub: String,
      deployment: String
    },
    tasks: [{
      type: String,
      required: true
    }]
  }]
},
{
  _id: false,
  strict: false
})

export default partialProjects