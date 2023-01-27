import express from 'express'

const router = express.Router()

router.get('/getAll')
router.post('/newItem')
router.patch('/:itemId/update')
router.delete('/:itemId/delete')

export default router