const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('Disco function goes here. You spin me around.')
})

module.exports = router
