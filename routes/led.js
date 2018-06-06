const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('LED Function goes here')
})

module.exports = router
