const express = require('express')
const router = express.Router()
// const knex = require('../knex')


// READ ALL records for this table
router.get('/', (req, res, next) => {
  res.send('LED Function goes here')
})

router.get('/disco-time', (req, res, next) => {
  res.send('Disco Time!!!')
})
router.get('/tts', (req, res, next) => {
  res.send('Text to Speech')
})
// UPDATE ONE record for this table
router.post('/:id', (req, res, next) => {
  res.send('UPDATED RECORD')
})

module.exports = router
