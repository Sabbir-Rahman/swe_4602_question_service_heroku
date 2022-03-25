const questionService = require('../model/questionSolver')

const addQuestion = async (req, res) => {
  const { description, tag, point, options } = req.body

  const newQuestion = {
    description,
    tag,
    point,
    options
  }

  const response = await questionService.create(newQuestion)
  
  return res.status(200).json(response)
}

const viewQuestions = async (req, res) => {

  const response = await questionService.find()

  return res.status(200).json(response)
}

module.exports = { addQuestion, viewQuestions }
