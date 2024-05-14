const { command } = require("../lib/");
const axios = require("axios");
command(
    {
        pattern: "script",
        fromMe: false,
        desc: "mrlit xd repo",
        type: "user",
    },
    async (message, match, m, client) => {
        let { data } = await axios.get('https://api.github.com/repos/Zeta-XD/REPO-TESTs')
        let cap = `\n*MRLIT MD*🧚‍♂️

*ᴡʜᴀᴛsᴀᴘʟ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴀɴᴅʏ ᴍʀʟɪᴛ͛*🖥️

*𝚪⃯ᴇ͛ᴩ͛ᴏ͛ 𝐔͍ʀ͛ʟ͛* : ````https://github.com/andymrlit/MRLIT-XD````

❒ *𝐅͍ᴏ͛ʀ͛ᴋ͛ 𝚫ɴ͛ᴅ͛ 𝐒͓̽ᴛ͛ᴀ̟ʀ̟*


➫ *𝐒͢͢ᴇ͛ꜱ͛ꜱ͍͛ɪ͛ᴏ͛ɴ͛* : ````https://bwakalemd-0f433deeafed.herokuapp.com/````

*𝚻⃯͓ʜ⃯͛ᴀ͛ɴ⃯͛ᴋ͛ꜱ͛*🦋

*➫ 𝐒͍ᴜ͛ᴩ͛ᴩ͛ᴏ͛ʀᴛ̟᷍ 𝐆ʀ͛͢ᴏ͛ᴜ͛ᴩ͍͛*

````https://chat.whatsapp.com/IxLFcEVfOaJHTBOSXK1T0U````\n`
        
        return await message.client.relayMessage(message.jid,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 699999000,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: cap,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
          });
