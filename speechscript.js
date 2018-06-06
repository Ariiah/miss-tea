const axios = require('axios')
const fs = require('fs')
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1')

require('dotenv').config()

function obtainMp3({ filename, speechString }) {
  const textToSpeech = new TextToSpeechV1({
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  })
  
  const synthesizeParams = {
    text: speechString,
    accept: 'audio/mp3',
    voice: 'en-US_AllisonVoice'
  }
  
  // Pipe the synthesized text to a file.
  textToSpeech.synthesize(synthesizeParams).on('error', function(error) {
    console.log(error);
  }).pipe(fs.createWriteStream(filename))
}

obtainMp3({ filename: 'target.mp3', speechString: 'When you stare into the abyss the abyss stares back at you.' })

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
