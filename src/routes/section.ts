import express from 'express'

const router = express.Router()

router.get('/getAll')
router.post('/newSection')
router.patch('/:sectionId/update')
router.delete('/:sectionId/delete')

export default router