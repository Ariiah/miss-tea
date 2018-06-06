const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.send('TTS function goes here.')
})

module.exports = router
