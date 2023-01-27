import { Schema } from 'mongoose'

const partialExperience = new Schema({
  experience: [{
    position: {
      type: String,
      required: true
    },
    organization: {
      type: String,
      required: true
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

export default partialExperience