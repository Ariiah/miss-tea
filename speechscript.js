const axios = require('axios')
const fs = require('fs')
const TextToSpeechV1 = require('watson-developer-cloud/text-to-speech/v1')

require('dotenv').config()

const tempMp3Filename = 'temp.mp3'

function obtainMp3({filename, speechString}) {
  // console.log('whyyyy');
  return new Promise((resolve, reject) => {
    // console.log('here?');
    const textToSpeech = new TextToSpeechV1({username: process.env.USERNAME, password: process.env.PASSWORD})

    const synthesizeParams = {
      text: speechString,
      accept: 'audio/mp3',
      voice: 'en-US_AllisonVoice'
    }

    // Pipe the synthesized text to a file.
    // textToSpeech.synthesize(synthesizeParams).on('error', function(error) {
    //   console.log(error);
    // }).pipe(fs.createWriteStream(filename))
    //
    const writable = fs.createWriteStream('./temp.mp3')
    textToSpeech.synthesize(synthesizeParams).on('error', function(error) {
      // console.log('Error:', error);
    }).pipe(writable)

    writable.on('error', (err) => {
      (err)
    }).on('finish', function() {
      resolve("success")
    })
  })
}

// BYTE ARRAY
function read() {
  const path = './temp.mp3'
  // console.log('path:', path);
  // file is a ArrayBuffer
  const file = fs.readFileSync(path)
  // console.log('file:', file)
  const b = Buffer.from(file)
  // console.log('b:', b);

  // ab refers to the undlying ArrayBuffer created with b.
  const ab = b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
  // console.log('ab:', ab);
  // Turns the buffer in unsigned integer 8 array string
  const ui8 = new Uint8Array(b.buffer, b.byteOffset, b.byteLength / Uint8Array.BYTES_PER_ELEMENT).toString()

  // Resolves the promise and returns the ui8 string
  // console.log('ui8:', ui8);
  return ui8
}

async function readAndWrite() {
  const writeFile = await obtainMp3({ filename: tempMp3Filename, speechString: 'Hello Boulder.' })
  // console.log('called');
  const result = read(tempMp3Filename)
  // console.log('result:', result)
  return result
}

readAndWrite()

// MISTY CALLS

async function talk() {
  const dataByte = await readAndWrite()
  console.log(dataByte)
  axios({
    url: 'http://10.9.21.211:80/api/audio',
    method: 'post',
    data: {
      "FilenameWithoutPath": "temp.mp3",
      "DataAsByteArrayString": dataByte,
      "ImmediatelyApply": false,
      "OverwriteExisting": true
    }
  })
  .then(() => {
    axios({
      url: 'http://10.9.21.211:80/api/audio/play',
      method: 'post',
      data: {
        AssetId: 'temp.mp3'
      }
    })
  })
}

talk()
