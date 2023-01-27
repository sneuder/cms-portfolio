import express from 'express'

import userRouter from '../routes/user'
import sectionrouter from '../routes/section'
import itemRouter from '../routes/item'

import userController from '../controller/user'
import sectionController from '../controller/section'
import itemController from '../controller/item'

const startServer = () => {
  const app = express()

  app.use('/user', userRouter, userController)
  app.use('/section', sectionrouter, sectionController)
  app.use('/:section', itemRouter, itemController)

  app.listen(3000, () => {
    console.log('listening...')
  })
}

export default startServer