import express from 'express'
import routerEducation from '../routes/education'
import routerExperience from '../routes/experience'
import routerProjects from '../routes/projects'

const startServer = () => {
  const app = express()

  app.use('/education', routerEducation)
  app.use('/experience', routerExperience)
  app.use('/education', routerProjects)

  app.listen(3000, () => {
    console.log('listening...')
  })
}

export default startServer