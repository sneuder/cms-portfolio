import { Schema } from 'mongoose'

const partialEducation = new Schema({
  education: [{
    degree: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    }
  }]
},
{
  _id: false,
  strict: false
})

export default partialEducation
