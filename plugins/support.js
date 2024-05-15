const { getJson, getBuffer, command, isPrivate, sleep } = require("../lib/");

command({
    pattern: "owner",
    fromMe: isPrivate,
    desc: "Andy Mrlit",
    type: "support"
}, async (message) => {
    const name = 'MC ANDY', title = "Andy Mrlit 😎", number = '13092208152', body = "Eʏᴘᴢ☔";
    const image = "https://i.imgur.com/M8S9JjL.jpeg", sourceUrl = 'https://github.com/andymrlit/MRLIT-XD';
    const logo = await getBuffer(image);
    const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nORG: powered by Mrlit Andy;\nTEL;type=CELL;type=VOICE;waid=${number}:${number}\nEND:VCARD`;
    const adon = { title, body, thumbnail: logo, mediaType: 1, mediaUrl: sourceUrl, sourceUrl, showAdAttribution: true, renderLargerThumbnail: false };
    await message.client.sendMessage(message.jid, { contacts: { displayName: name, contacts: [{ vcard }] }, contextInfo: { externalAdReply: adon } }, { quoted: message });
});