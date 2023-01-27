import express from 'express'
import { deleteProject, getAllProjects, getProject, patchProject, postProject, publishStateProject } from '../controllers/projects'

const router = express.Router()

router.get('/', getAllProjects)
router.get('/:projectId', getProject)
router.post('/', postProject)
router.patch('/', patchProject)
router.patch('/unpublish', publishStateProject)
router.delete('/', deleteProject)

export default router