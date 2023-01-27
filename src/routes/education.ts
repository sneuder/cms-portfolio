import express from 'express'
import { deleteEducation, getAllEducation, getEducation, patchEducation, postEducation, publishStateEducation } from '../controllers/education'

const router = express.Router()

router.get('/', getAllEducation)
router.get('/:educationId', getEducation)
router.post('/', postEducation)
router.patch('/', patchEducation)
router.patch('/publishState', publishStateEducation)
router.delete('/', deleteEducation)

export default router