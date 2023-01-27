import express from 'express'

const router = express.Router()

router.get('/')
router.get('/:educationId')
router.post('/')
router.patch('/')
router.patch('/unpublish')
router.delete('/')

export default router