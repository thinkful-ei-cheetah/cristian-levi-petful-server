const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()
const catsArr = require('../data/cats-array')
const Queue = require('../data/queue')

const catsRouter = express.Router()
const catQ = new Queue()

catsArr.forEach(cat => catQ.enqueue(cat))


catsRouter
  .route('/')
  .get((req, res, next) => {
    FirstCat = catQ.first.value
    res.status(200).json(FirstCat)
  })
  .delete((req, res, next) => {
    AdoptedCat = catQ.dequeue()
    catQ.enqueue(AdoptedCat)
    res.status(200).json(AdoptedCat)
  })

module.exports = catsRouter