import express from 'express'

const router = express.Router()

router.post('/newUser')
router.patch('/:userId/update')
router.delete('/:userId/delete')

export default router