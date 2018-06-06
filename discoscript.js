// const axios = require('axios')
//
// function partyTime(red, yellow, blue) {
//   axios({
//     url: 'http://10.9.21.211:80/api/audio/play',
//     method: 'post',
//     data: {
//       AssetId: "MrMeeseeks.wav"
//     }
//   })
//
//   axios({
//     url: 'http://10.9.21.211:80/api/images/change',
//     method: 'post',
//     data: {
//       FileName: "mrmee.jpg"
//     }
//   })
//
//   axios({
//     url: 'http://10.9.21.211:80/api/drive/time',
//     method: 'post',
//     data: {
//       LinearVelocity: 0,
//       AngularVelocity: 100,
//       TimeMS: 10000
//     }
//   })
//   .then(()=>{
//     axios({
//       url: 'http://10.9.21.211:80/api/images/change',
//       method: 'post',
//       data: {
//         FileName: "bmo5.jpg"
//       }
//     })
//   })
//
//
// }
//
// partyTime()
