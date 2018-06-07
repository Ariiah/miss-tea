const express = require('express')
const router = express.Router()
const axios = require('axios')

function partyTime(red, yellow, blue) {
  axios({
    url: 'http://10.9.21.211:80/api/audio/play',
    method: 'post',
    data: {
      AssetId: "MrMeeseeks.wav"
    }
  })

  axios({
    url: 'http://10.9.21.211:80/api/images/change',
    method: 'post',
    data: {
      FileName: "mrmee.jpg"
    }
  })

  axios({
    url: 'http://10.9.21.211:80/api/drive/time',
    method: 'post',
    data: {
      LinearVelocity: 0,
      AngularVelocity: 100,
      TimeMS: 100
    }
  }).then(() => {
    axios({
      url: 'http://10.9.21.211:80/api/images/change',
      method: 'post',
      data: {
        FileName: "bmo5.jpg"
      }
    })
  })

}

function changeColor(red, green, blue) {
  axios({
    url: 'http://10.9.21.211:80/api/led/change',
    crossDomain: true,
    method: 'post',
    data: {
      red: red,
      green: green,
      blue: blue
    }
  })
}

router.get('/', (req, res, next) => {

  // changeColor()
  // partyTime()

  let counter = 100
  let red = 50
  let green = 150
  let blue = 255

  function discoParty() {

    if (red >= 255) {
      red -= 255
    }
    if (green >= 255) {
      green -= 255
    }
    if (blue >= 255) {
      blue -= 255
    }

    // changeColor(red, green, blue)

    red += 50
    green += 50
    blue += 50
  }

  // let myInterval = setInterval(discoParty, 100)

  res.send('Disco function goes here. You spin me around.')
})

module.exports = router
