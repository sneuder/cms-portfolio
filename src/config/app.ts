import express from 'express'

const startServer = () => {
  const app = express()
  app.listen(3000, () => {
    console.log('listening...')
  })
}

export default startServer