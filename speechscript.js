const axios = require('axios')
// const fs = require('fs')
// const FileReader = require('filereader')
require('dotenv').config();

// WATSON NODE
// var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
// var fs = require('fs');
//
// var textToSpeech = new TextToSpeechV1({
//   username: process.env.USERNAME,
//   password: process.env.PASSWORD
// })
// var synthesizeParams = {
//   text: 'help me',
//   accept: 'audio/mp3',
//   voice: 'en-US_AllisonVoice'
// }
//
//  Pipe the synthesized text to a file.
// textToSpeech.synthesize(synthesizeParams).on('error', function(error) {
//   console.log(error);
// }).pipe(fs.createWriteStream('speech.mp3'))

const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const fs = require('fs')

const textToSpeech = new TextToSpeechV1({
  username: '041c85e0-e0d7-4cce-b093-3bcf4347d84c',
  password: 'rS7qqVaNHB1Z'
})

const synthesizeParams = {
  text: 'help',
  accept: 'audio/mp3',
  voice: 'en-US_AllisonVoice'
}

// Pipe the synthesized text to a file.
textToSpeech.synthesize(synthesizeParams).on('error', function(error) {
  console.log(error);
}).pipe(fs.createWriteStream('disguise.mp3'))

// CURL
// curl - X POST - u 041c85e0-e0d7-4cce-b093-3bcf4347d84c:rS7qqVaNHB1Z
// --header "Content-Type: application/json"
// --header "Accept: audio/mp3"
// --data "{\"text\":\"What is my purpose?\"}"
// --output purpose.mp3 "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize"

// AXIOS
// axios({
//   method: 'post',
//   url: 'https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'audio/mp3',
//     'Authorization': `Basic ${process.env.USERNAME}:${process.env.PASSWORD}`
//   },
//   data: {
//     'text': 'testing 1 2 3'
//   }
// }).then(result => {
//   console.log(' i am super successful in life')
//   // console.log(result);
// }).catch(err => {
//   // console.log(err);
//   console.log("i did not succeed in life", err)
// })

// axios.post('https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize',{
//   method: 'post',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'audio/mp3',
//   },
//   auth: {
//     username: process.env.USERNAME,
//     password: process.env.PASSWORD
//   },
//   data: {
//     text: 'testing 1 2 3'
//   }
//   }).then(result => {
//     console.log(' i am super successful in life')
//   }).catch(err => {
//     console.log("i did not succeed in life", err)
//   })

// MISTY CALLS

// function talk() {
//   axios({
//     url: 'http://10.9.21.211:80/api/audio',
//     method: 'post',
//     data: {
//       "FilenameWithoutPath": "speech.mp3",
//       "DataAsByteArrayString": `${bytestring}`,
//       "ImmediatelyApply": false,
//       "OverwriteExisting": true
//     }
//   })
//
//   axios({
//     url: 'http://10.9.21.211:80/api/audio',
//     method: 'get'
//   })
//   .then(() => {
//     axios({
//       url: 'http://10.9.21.211:80/api/audio/play',
//       method: 'post',
//       data: {
//         AssetId: 'speech.mp3'
//       }
//     })
//   })
// }

// talk()
