const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()
const usersArr = require('../data/users-array')
const Queue = require('../data/queue')

const usersRouter = express.Router()
const userQ = new Queue()

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

usersRouter
  .route('/')
  .get((req, res, next) => {
    shuffleArray(usersArr)
    res.status(200).json(usersArr)
  })
  .post(jsonBodyParser, (req, res, next) => {
    if(!req.body.name){
      res.status(400).json('Name not included in body')
    }
    let newUser = xss(req.body.name)
    usersArr.push(newUser)
    res.status(201).json(newUser)
  })

module.exports = usersRouter