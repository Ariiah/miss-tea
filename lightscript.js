const axios = require('axios')

function yellow(red, green, blue) {
  axios({
    url: 'http://10.9.21.211:80/api/led/change',
    method: 'post',
    data: {
      red: red,
      green: green,
      blue: blue
    }
  })
}

// yellow()

let red = 50
let green = 150
let blue = 255

function discoParty() {
  console.log(red)

  if (red >= 255) {
    red -= 255
  }
  if (green >= 255) {
    green -= 255
  }
  if (blue >= 255) {
    blue -= 255
  }

  yellow(red, green, blue)

  red += 50
  green += 50
  blue += 50

}

let myInterval = setInterval(discoParty, 1000)
