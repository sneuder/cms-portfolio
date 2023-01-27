import express from 'express'

const router = express.Router()

router.get('/getall')
router.post('/item')
router.patch('/:itemId')
router.delete('/:itemId')

export default router