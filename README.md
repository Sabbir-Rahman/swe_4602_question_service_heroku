# swe_4602_question_service_heroku
This is deployed on heroku https://fathomless-gorge-46351.herokuapp.com

Example request can be found in index.http

###
GET https://fathomless-gorge-46351.herokuapp.com/question/view

###
POST https://fathomless-gorge-46351.herokuapp.com/question/create
Content-Type: application/json 

{ 
  "description": "This is a question from heroku",
  "tag": "test",
  "point": 1,
  "options": ["ABC", "DEF", "GHI"]
}
###
