import express from 'express'
import router from '../routes'
import userRouter from '../routes/user'
import controller from '../controller'

const startServer = () => {
  const app = express()

  app.use('/user', userRouter)
  app.use('/section', router)
  app.use('/:item', router)

  app.listen(3000, () => {
    console.log('listening...')
  })
}

export default startServer