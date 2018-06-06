const axios = require('axios')
const fs = require('fs')
const FileReader = require('filereader')

//
// var TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1');
// var fs = require('fs');
//
// var textToSpeech = new TextToSpeechV1({
//   username: '041c85e0-e0d7-4cce-b093-3bcf4347d84c',
//   password: 'rS7qqVaNHB1Z'
// });
//
// /
//
// var synthesizeParams = {
//   text: 'help me',
//   accept: 'audio/mp3',
//   voice: 'en-US_AllisonVoice'
// };
//
//  Pipe the synthesized text to a file.
// textToSpeech.synthesize(synthesizeParams).on('error', function(error) {
//   console.log(error);
// }).pipe(fs.createWriteStream('speech.mp3'));

curl -X POST -u 041c85e0-e0d7-4cce-b093-3bcf4347d84c:rS7qqVaNHB1Z --header "Content-Type: application/json" --header "Accept: audio/mp3" --data "{\"text\":\"What is my purpose?\"}" --output purpose.mp3 "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize"

// byte array

function readMp3() {
  return new Promise((resolve, reject) => {
    const path = './speech.mp3'
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        var b = Buffer.from(data)
        // ArrayBuffer
        var ab = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
        // TypedArray
        var ui8 = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT).toString()
        console.log(ui8)
      }
    })
  })
}

// upload new mp3

// get all audio

// play audio
// function play() {
//   axios({
//     url: 'http://10.9.21.211:80/api/audio/play',
//     method: 'post',
//     data: {
//       AssetId: 'speech.mp3'
//     }
//   })
// }
//
// play()

// sendPostRequestToRobot(
//   audio: {
//     blockId: [],
//     FileName: `${text.mp3}`,
//     DataAsByteString: `${bytestring}`
//   }
// )
//
// UpdateAudioList()
//
// saveAudioAssestToRobot
//
// PlayAudioClip('text.mp3')
