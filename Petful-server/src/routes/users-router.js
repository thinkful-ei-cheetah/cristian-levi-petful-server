const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()

const usersRouter = express.Router()

usersRouter
  .route('/')
  .post(jsonBodyParser, (req, res, next) => {
    res.status(201).json(`your username is ${xss(req.body.name)}`)
  })

module.exports = usersRouter