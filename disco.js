const axios = require('axios')

function yellow(red, yellow, blue) {
 axios({
   url: 'http://10.9.21.211:80/api/led/change',
   method: 'post',
   data: { red: 255, green: 0, blue: 0 }
 })
}

yellow()
