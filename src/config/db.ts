import mongoose from 'mongoose'

const connectDB = (): void => {
  const DB_URL = process.env.DB_URL as string

  mongoose.set('strictQuery', true)
  mongoose.connect(DB_URL)
  .then(() => {
    console.log('db connected...')
  })
  .catch(e => {
    console.log(e)
  })
}

export default connectDB