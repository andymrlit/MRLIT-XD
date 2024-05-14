const axios = require('axios');
const { command, isPrivate } = require("../lib");

let labsVoiceID = {
    "rachel":{
       "voice_id":"21m00Tcm4TlvDq8ikWAM"
    },
    "clyde":{
       "voice_id":"2EiwWnXFnvU5JabPnv8n"
    },
    "domi":{
       "voice_id":"AZnzlk1XvdvUeBnXmlld"
    },
    "dave":{
       "voice_id":"CYw3kZ02Hs0563khs1Fj"
    },
    "fin":{
       "voice_id":"D38z5RcWu1voky8WS1ja"
    },
    "bella":{
       "voice_id":"EXAVITQu4vr4xnSDxMaL"
    },
    "antoni":{
       "voice_id":"ErXwobaYiN019PkySvjV"
    },
    "thomas":{
       "voice_id":"GBv7mTt0atIp3Br8iCZE"
    },
    "charlie":{
       "voice_id":"IKne3meq5aSn9XLyUdCD"
    },
    "emily":{
       "voice_id":"LcfcDJNUP1GQjkzn1xUU"
    },
    "elli":{
       "voice_id":"MF3mGyEYCl7XYWbV9V6O"
    },
    "callum":{
       "voice_id":"N2lVS1w4EtoT3dr4eOWO"
    },
    "patrick":{
       "voice_id":"ODq5zmih8GrVes37Dizd"
    },
    "harry":{
       "voice_id":"SOYHLrjzK2X1ezoPC6cr"
    },
    "liam":{
       "voice_id":"TX3LPaxmHKxFdv7VOQHJ"
    },
    "dorothy":{
       "voice_id":"ThT5KcBeYPX3keUQqHPh"
    },
    "josh":{
       "voice_id":"TxGEqnHWrfWFTfGW9XjX"
    },
    "arnold":{
       "voice_id":"VR6AewLTigWG4xSOukaG"
    },
    "charlotte":{
       "voice_id":"XB0fDUnXU5powFXDhCwa"
    },
    "matilda":{
       "voice_id":"XrExE9yKIg1WjnnlVkGX"
    },
    "matthew":{
       "voice_id":"Yko7PKHZNXotIFUBG7I9"
    },
    "james":{
       "voice_id":"ZQe5CZNOzWyzPSCn5a3c"
    },
    "joseph":{
       "voice_id":"Zlb1dXrM653N07WRdFW3"
    },
    "jeremy":{
       "voice_id":"bVMeCyTHy58xNoL34h3p"
    },
    "michael":{
       "voice_id":"flq6f7yk4E4fJM5XTYuZ"
    },
    "ethan":{
       "voice_id":"g5CIjZEefAph4nQFvHAz"
    },
    "gigi":{
       "voice_id":"jBpfuIE2acCO8z3wKNLl"
    },
    "freya":{
       "voice_id":"jsCqWAovK2LkecY7zXl4"
    },
    "grace":{
       "voice_id":"oWAxZDx7w5VEj9dCyTzz"
    },
    "daniel":{
       "voice_id":"onwK4e9ZLuTAKqWW03F9"
    },
    "serena":{
       "voice_id":"pMsXgVXv3BLzUgSXRplE"
    },
    "adam":{
       "voice_id":"pNInz6obpgDQGcFmaJgB"
    },
    "nicole":{
       "voice_id":"piTKgcLEGmPE4e6mEKli"
    },
    "jessie":{
       "voice_id":"t0jbNlBVZ17f02VDIeMI"
    },
    "ryan":{
       "voice_id":"wViXBPUzp2ZZixB1xQuM"
    },
    "sam":{
       "voice_id":"yoZ06aMxZJJ28mfd3POQ"
    },
    "glinda":{
       "voice_id":"z9fAnlkpzviPz146aGWa"
    },
    "giovanni":{
       "voice_id":"zcAOhNBS3c14rBihAFp1"
    },
    "mimi":{
       "voice_id":"zrHiDhphv9ZnVXBqCLjz"
    }
 }

async function elevenlabs(match) {
  let response = {};
for(key in labsVoiceID) {
  if(match.split(/[|,;]/)[1].toLowerCase().trim() == key){
  let v_key = labsVoiceID[key]["voice_id"];
  const voiceURL = `https://api.elevenlabs.io/v1/text-to-speech/${v_key}/stream`;
  
  response = await axios({
        method: "POST",
        url: voiceURL,
        data: {
          text: match.split(/[|.;]/)[0].trim(),
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
          },
          model_id: "eleven_monolingual_v1",
        },
        headers: {
          Accept: "audio/mpeg",
          "xi-api-key": ('2a0050b5932ff8d79f54418fa370d1c1'),
          "Content-Type": "application/json",
        },
        responseType: "stream"
      });
      break;
    }
  }
  return response.data;
}

command(
  {
    pattern: "aitts",
    fromMe: isPrivate,
    desc: "converts video/audio/voice to voice",
    type: "converter",
  },
  async (message, match, client, m) => {
	  try{
const [v, k] = match.split(/,;|/);
	if (!k) return await message.reply(`*_need voice id and text_*\n_example_\n\n_*aitts* hey vroh its a test,adam_\n`)
let stream = await elevenlabs(match);
return await message.client.sendMessage(message.jid, {audio: {stream}, mimetype: 'audio/mpeg'
	}, 'audio')
	  }catch(error){
		  return message.reply(error)
	  }
});
