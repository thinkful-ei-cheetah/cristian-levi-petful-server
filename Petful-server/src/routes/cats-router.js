const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()

const catsRouter = express.Router()

catsRouter
  .route('/')
  .get((req, res, next) => {
    res.status(200).json('Here is a cat')
  })
  .delete((req, res, next) => {
    res.status(200).json('Cat has been adopted')
  })

module.exports = catsRouter