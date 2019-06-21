require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { CLIENT_ORIGIN } = require('./config')
const helmet = require('helmet');
const usersRouter = require('./routes/users-router')
const catsRouter = require('./routes/cats-router')
const dogsRouter = require('./routes/dogs-router')

const app = express();
app.use(cors({
  origin: CLIENT_ORIGIN
}));
app.use(express.json())
app.use(helmet())


app.use('/users', usersRouter)
app.use('/cats', catsRouter)
app.use('/dogs', dogsRouter)

// Catch-all 404
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

module.exports = app