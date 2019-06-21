const express = require('express')
const xss = require('xss')
const jsonBodyParser = express.json()
const dogsArr = require('../data/dogs-array')
const Queue = require('../data/queue')

const dogsRouter = express.Router()
const dogQ = new Queue()

dogsArr.forEach(dog => dogQ.enqueue(dog))

dogsRouter
  .route('/')
  .get((req, res, next) => {
    FirstDog = dogQ.first.value
    res.status(200).json(FirstDog)
  })
  .delete((req, res, next) => {
    AdoptedDog = dogQ.dequeue()
    dogQ.enqueue(AdoptedDog)
    res.status(200).json(AdoptedDog)
  })

module.exports = dogsRouter