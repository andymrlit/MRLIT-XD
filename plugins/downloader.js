const { command , isPrivate , getBuffer, getJson } = require("../lib");
const fetch = require("node-fetch");
const { CAPTION } = require("../config");
const axios = require("axios");
const X = require("../config");

command(
    {
        pattern: "song",
        fromMe: isPrivate,
        desc: "Song Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need Song Name Or Url_*");
var res = await axios.get(`https://api-viper-x.koyeb.app/api/song?name=${match}`)
var song = res.data
await message.client.sendMessage(message.jid, { text: `*_Downloading ${song.data.title}_*` },{ quoted: message})
const aswinsparky = await (await fetch(`${song.data.downloadUrl}`)).buffer()
await message.client.sendMessage(message.jid, { audio :aswinsparky,  mimetype:"audio/mpeg", contextInfo: { externalAdReply: {
title: "𝗠𝗥𝗟𝗜𝗧-𝗫𝗗🧚",
body: "𝙎𝙤𝙣𝙜 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/M8S9JjL.jpeg" }} }, {quoted: message })
    }
    );

// ZETA BRO //

command(
    {
        pattern: "video",
        fromMe: isPrivate,
        desc: "Yt Video Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a Video Name_*");
let {result} = await getJson(`https://api-aswin-sparky.koyeb.app/api/downloader/yt_video?search=${match}`);
await message.client.sendMessage(message.jid, { text: `*_Downloading ${result.title}_*` },{ quoted: message})
return await message.sendFromUrl(result.url, {contextInfo: { externalAdReply: {
title: "𝗠𝗥𝗟𝗜𝗧-𝗫𝗗",
body: "𝙑𝙞𝙙𝙚𝙤 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/M8S9JjL.jpeg" }}, caption: `*${result.title}*`}, {quoted: message })
    });

// Zeta-XD 

command(
    {
        pattern: "yta",
        fromMe: isPrivate,
        desc: "YouTube song Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.reply("*_Need YouTube Url_*");
        let dat = `https://api-brunosobrino.onrender.com/api/v1/ytmp3?url=${match}`
await message.client.sendMessage(message.jid, { audio :{url: dat },  mimetype:"audio/mpeg", contextInfo: { externalAdReply: {
title: "𝗠𝗥𝗟𝗜𝗧-𝗫𝗗",
body: "𝙎𝙤𝙣𝙜 𝘿𝙤𝙬𝙣𝙡𝙤𝙖𝙙𝙚𝙙 𝙎𝙪𝙘𝙘𝙚𝙨𝙨𝙛𝙪𝙡𝙡𝙮",
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/M8S9JjL.jpeg" }}, }, {quoted: message })
    }
    );

// ZETA BRO //
command(
    {
        pattern: "ytv",
        fromMe: true,
        desc: "Yt Video Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need a Video URL*");

await message.client.sendMessage(message.jid, { video: { url: `https://api-ironman444ff.koyeb.app/ironman/video?url=${match}`
 }, caption: "ᴀɴᴅʏᴍʀʟɪᴛ🧚" });
});

// Zeta-XD 

command(
    {
        pattern: "spotify",
        fromMe: isPrivate,
        desc: "Spotify Song Downloader",
        type: "downloader",
    },
    async (message, match, m) => {
match = match || message.reply_message.text;
	if(!match) return await message.reply("*_Need Spotify Url_*");
let buff = (await getJson(`https://api.maher-zubair.tech/download/spotify?url=${match}`)).result.url
await message.sendFromUrl(buff, {quoted: message})
})

// Zeta Kunda // */
command(
  {
    pattern: "insta",
    fromMe: isPrivate,
    desc: "Instagram Reel/Post Downloader",
    type: "downloader",
  },
  async (message, match) => {
    match = match || message.reply_message.text
   if (!match)return message.reply(`*_Need instagram Link_*`)
const res = await axios.get(`https://api-ironman444ff.koyeb.app/ironman/insta?url=${match}`);
var video = res.data[0].download_link;
await message.sendFromUrl(video, { caption: "ᴀɴᴅʏᴍʀʟɪᴛ🧚"});
});

command(
  {
    pattern: "story",
    fromMe: isPrivate,
    desc: "Instagram Story Downloader",
    type: "downloader",
  },
  async (message, match) => {
    match = match || message.reply_message.text
   if (!match)return message.reply(`*_Need Story Link_*`)
      var { data } = await getJson(`https://api.vihangayt.asia/downloader/ig?url=${match}`);
        
        for (let i = 0; i < data.data.length; i++) {
            await message.sendFromUrl(data.data[i].url, { caption: (X.CAPTION)})
            }
});



// Andi ///


command(
    {
        pattern: "pinterest",
        fromMe: isPrivate,
        desc: "pinterest Downloader",
        type: "downloader",
    },
    async (message, match) => {
        if (!match) return await message.sendMessage("*_Need Pinterest Url_*");
var {result} = await getJson(`https://api.lokiser.xyz/api/pinterestdl?link=${match}`)
await message.sendFromUrl(result.LokiXer.url,{ contextInfo: { externalAdReply: {
title: "𝗠𝗥𝗟𝗜𝗧-𝗫𝗗",
body: ``,
sourceUrl: "",
mediaUrl: "",
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: false,
thumbnailUrl: "https://i.imgur.com/M8S9JjL.jpeg" }}, caption: (X.CAPTION)}, {quoted: message})
    }
    );
