import express from 'express'
import { deleteExperience, getAllExperience, getExperience, patchExperience, postExperience, publishStateExperience } from '../controllers/experience'

const router = express.Router()

router.get('/', getAllExperience)
router.get('/:experienceId', getExperience)
router.post('/', postExperience)
router.patch('/', patchExperience)
router.patch('/unpublish', publishStateExperience)
router.delete('/', deleteExperience)

export default router