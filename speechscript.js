const axios = require('axios')
const fs = require('fs')
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1')

require('dotenv').config()

const tempMp3Filename = 'temp.mp3'

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

// BYTE ARRAY
function read(sourceFilename) {
  const path = sourceFilename
  // file is a ArrayBuffer
  const file = fs.readFileSync(path)
  console.log(file)
  const b = Buffer.from(file)

  // ab refers to the undlying ArrayBuffer created with b.
  const ab = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);

  // Turns the buffer in unsigned integer 8 array string
  const ui8 = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT).toString()

  // Resolves the promise and returns the ui8 string
  return ui8
}

obtainMp3({ filename: tempMp3Filename, speechString: 'Hello Boulder.' })

const result = read(tempMp3Filename)
console.log(result)

/* 
const fs = require("fs");

module.exports = {
  filenamesInDir(directory) {
    return new Promise((resolve, reject) => {
      fs.readdir(directory, (err, files) => {
        if (err) {
          reject(err)
        }
        else if (files.length === 0){
          reject("Nothing found in " + dn);
        }
        else {
          resolve(files);
        }
      });
    });
  },

  fileContents(filename) {
    return new Promise((resolve, reject) => {
      const options = {
        flag: "r",
        encoding: "utf-8"
      };

      fs.readFile(filename, options, (err, data) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(data);
        }
      });
    });
  },

  writeFile(filename, data) {
    return new Promise((resolve, reject) => {
      const options = {
        flag: "w",
        encoding: "utf-8"
      };

      fs.writeFile(filename, data, options, (err) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(true);
        }
      });
    });
  },

  eraseFile(filename) {
    return new Promise((resolve,reject) => {
      fs.unlink(filename, (err) => {
        if (err) {
          reject(err)
        }
        else {
          resolve(true);
        }
      });
    });
  }
};
*/

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
