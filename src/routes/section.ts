import express from 'express'

const router = express.Router()

router.get('/getall')
router.post('/:section')
router.patch('/:sectionId')
router.delete('/:sectionId')

export default router