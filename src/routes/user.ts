import express from 'express'

const router = express.Router()

router.post('/')
router.patch('/:userId')
router.delete('/:userId')

export default router