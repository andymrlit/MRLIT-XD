const {
  default: makeWASocket,
  useMultiFileAuthState,
  Browsers,
  makeInMemoryStore,
} = require("@whiskeysockets/baileys");
const fs = require("fs");
const { serialize } = require("./lib/serialize");
const { Message, Image, Sticker } = require("./lib/Base");
const pino = require("pino");
const path = require("path");
const events = require("./lib/event");
const got = require("got");
const config = require("./config");
const { PluginDB } = require("./lib/database/plugins");
const Greetings = require("./lib/Greetings");
const { MakeSession } = require("./lib/session");
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

require("events").EventEmitter.defaultMaxListeners = 500;
      
if (!fs.existsSync("./lib/session/creds.json")) {
  MakeSession(config.SESSION_ID, "lib/session", "mongodb+srv://andymrlit:bro@sukunabot.pgt5mzx.mongodb.net/?retryWrites=true&w=majority").then(
    console.log("Vesrion : " + require("./package.json").version)
  );
}
fs.readdirSync("./lib/database/").forEach((plugin) => {
  if (path.extname(plugin).toLowerCase() == ".js") {
    require("./lib/database/" + plugin);
  }
});

const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});

async function Abhiy() {
  console.log("Syncing Database");
  await config.DATABASE.sync();

  const { state, saveCreds } = await useMultiFileAuthState(
  "./lib/session" ,
    pino({ level: "silent" })
  );
  let conn = makeWASocket({
    logger: pino({ level: "silent" }),
    auth: state,
    printQRInTerminal: true,

    browser: Browsers.macOS("Desktop"),
    downloadHistory: false,
    syncFullHistory: false,
  });
  store.bind(conn.ev);
  //store.readFromFile("./lib/afiya.json");
  setInterval(() => {
    store.writeToFile("./lib/store_db.json");
    console.log("saved store");
  }, 30 * 60 * 1000);

  conn.ev.on("connection.update", async (s) => {
    const { connection, lastDisconnect } = s;
    if (connection === "connecting") {
      console.log("mrlit");
      console.log("𝗥𝗘𝗔𝗗𝗜𝗡𝗚 𝗦𝗘𝗦𝗦𝗜𝗢𝗡 𝗜𝗗 😊");
    }

    if (
      connection === "close" &&
      lastDisconnect &&
      lastDisconnect.error &&
      lastDisconnect.error.output.statusCode != 401
    ) {
      console.log(lastDisconnect.error.output.payload);
      Abhiy();
    }

    if (connection === "open") {
    
      console.log("𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 𝗟𝗢𝗚𝗜𝗡𝗘𝗗 𝗜𝗡𝗧𝗢 𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 🧚‍♂️");
      console.log("𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗜𝗡𝗚 𝗣𝗟𝗨𝗚𝗜𝗡𝗦 🛠️");

      let plugins = await PluginDB.findAll();
      plugins.map(async (plugin) => {
        if (!fs.existsSync("./plugins/" + plugin.dataValues.name + ".js")) {
          console.log(plugin.dataValues.name);
          var response = await got(plugin.dataValues.url);
          if (response.statusCode == 200) {
            fs.writeFileSync(
              "./plugins/" + plugin.dataValues.name + ".js",
              response.body
            );
            require("./plugins/" + plugin.dataValues.name + ".js");
          }
        }
      });
      console.log("𝗣𝗟𝗨𝗚𝗜𝗡𝗦 𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬 😇");

      fs.readdirSync("./plugins").forEach((plugin) => {
        if (path.extname(plugin).toLowerCase() == ".js") {
          require("./plugins/" + plugin);
        }
      });
      console.log("𝗠𝗥𝗟𝗜𝗧 𝗫𝗗 𝗖𝗢𝗡𝗡𝗘𝗖𝗧𝗘𝗗 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗟𝗬🧚‍♂️");
      let readMore = String.fromCharCode(8206).repeat(4001);
      let str = `𝗠𝗥𝗟𝗜𝗧-𝗫𝗗 𝗦𝗧𝗔𝗥𝗧𝗘𝗗🧚‍♂️ ${readMore}\n\n\n𝘝𝘌𝘙𝘚𝘐𝘖𝘕   : *${require("./package.json").version }* \n𝘗𝘓𝘜𝘎𝘐𝘕𝘚  : *${events.commands.length}* \n𝘔𝘖𝘋𝘌  : *${config.WORK_TYPE}* \n𝘗𝘙𝘌𝘍𝘐𝘟  : *${config.HANDLERS}* \n\nJOIN US   : *https://whatsapp.com/channel/0029VaKBCh58V0trY4tQfv3o* \nCONTACT US   : *https://wa.me/13092208152* \n\nTERMS   : _TERMS AND CONDITIONS_ \n_Terms and Conditions_

By interacting with this WhatsApp bot, you agree to the following terms and conditions:

_Advantages:_

- Receive helpful and informative responses to your queries
- Get automated support and assistance 24/7
- Enjoy a personalized experience with our bot's AI-powered capabilities
- Access exclusive content, tips, and resources
- Participate in interactive features, such as quizzes and polls, download futur

_Disadvantages and Rules to Avoid Ban:_

- Do not share explicit, vulgar, or offensive content
- Refrain from sending spam, phishing, or scam messages
- Do not attempt to exploit or manipulate the bot's functionality
- Avoid sharing personal information or sensitive data
- Do not engage in harassment, bullying, or hate speech

_Consequences of Violation:_

- Temporary or permanent ban from interacting with the bot
- Reporting of violations to WhatsApp or relevant authorities
- Legal action, if necessary

_Other Important Terms:_

- We collect and store your conversations with the bot for improvement purposes
- We may share aggregated and anonymized data with third-party partners
- We reserve the right to modify or update these terms and conditions at any time without notice

By continuing to interact with this WhatsApp bot, you acknowledge that you have read, understood, and agreed to these terms and conditions.`;
      conn.sendMessage(conn.user.id, { text: str });
     try {
        conn.ev.on("creds.update", saveCreds);

        conn.ev.on("group-participants.update", async (data) => {
          Greetings(data, conn);
        });
        conn.ev.on("messages.upsert", async (m) => {
          if (m.type !== "notify") return;
          let ms = m.messages[0];
          let msg = await serialize(JSON.parse(JSON.stringify(ms)), conn);
          if (!msg.message) return;
          let text_msg = msg.body;
          if (text_msg && config.LOGS)
            console.log(
              `At : ${
                msg.from.endsWith("@g.us")
                  ? (await conn.groupMetadata(msg.from)).subject
                  : msg.from
              }\nFrom : ${msg.sender}\nMessage:${text_msg}`
            );

          events.commands.map(async (command) => {
            if (
              command.fromMe &&
              !config.SUDO.split(",").includes(
                msg.sender.split("@")[0] || !msg.isSelf
              )
            )
              return;
            let comman;
            if (text_msg) {
              comman = text_msg.trim().split(/ +/)[0];
              msg.prefix = new RegExp(config.HANDLERS).test(text_msg)
                ? text_msg.split("").shift()
                : ",";
            }
            if (command.pattern && command.pattern.test(comman)) {
              var match;
              try {
                match = text_msg.replace(new RegExp(comman, "i"), "").trim();
              } catch {
                match = false;
              }
              whats = new Message(conn, msg, ms);
              command.function(whats, match, msg, conn);
            } else if (text_msg && command.on === "text") {
              whats = new Message(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m);
            } else if (
              (command.on === "image" || command.on === "photo") &&
              msg.type === "imageMessage"
            ) {
              whats = new Image(conn, msg, ms);
              command.function(whats, text_msg, msg, conn, m, ms);
            } else if (
              command.on === "sticker" &&
              msg.type === "stickerMessage"
            ) {
              whats = new Sticker(conn, msg, ms);
              command.function(whats, msg, conn, m, ms);
            }
          });
        });
      } catch (e) {
        console.log(e.stack + "\n\n\n\n\n" + JSON.stringify(msg));
      }
    }
  });
  process.on("uncaughtException", async (err) => {
    let error = err.message;
       
   await console.log(err);
 await conn.sendMessage(conn.user.id, { text: error });
    
  });
}
setTimeout(() => {
  Abhiy();
}, 3000);
