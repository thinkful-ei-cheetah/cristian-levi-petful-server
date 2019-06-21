const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()

const dogsRouter = express.Router()

dogsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json('Here is a dog')
  })
  .delete((req, res, next) => {
    res.status(200).json('Dog has been adopted')
  })

module.exports = dogsRouter