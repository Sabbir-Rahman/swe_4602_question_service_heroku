const express = require('express')
const router = express.Router()

const { addQuestion } = require('../controllers/questionController')

router.post('/create', addQuestion)

module.exports = router
