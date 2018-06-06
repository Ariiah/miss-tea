const axios = require('axios')
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
const fs = require('fs')

require('dotenv').config()

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

// BYTE ARRAY



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
