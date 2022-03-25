const express = require('express')
const router = express.Router()

const { addQuestion, viewQuestions } = require('../controllers/questionController')

router.post('/create', addQuestion)
router.get('/view', viewQuestions)

module.exports = router
