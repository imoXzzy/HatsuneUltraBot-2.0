import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone' 

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumber = '' //Ejemplo: 573218138672

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.owner = [
// <-- Número @s.whatsapp.net -->
  ['18493907272', '🜲 Propietario 🜲', true],
  [''],
  [''],
  [''], 
  [''],
  
// <-- Número @lid -->
  ['1920437612698@lid', 'Erencito', true],
  ['', 'DevAlexJs', true], 
  ['', 'Legna', true]
];

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.mods = []
global.suittag = ['18493907272'] 
global.prems = []

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.libreria = 'Baileys'
global.baileys = 'V 6.7.17' 
global.vs = '2.2.5'
global.nameqr = 'HatsuneBot-MD'
global.namebot = '𝐇𝐚𝐭𝐬𝐮𝐧𝐞𝐁𝐨𝐭-𝐔𝐥𝐭𝐫𝐚'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.packname = '𝙷𝙰𝚃𝚂𝚄𝙽𝙴-𝙱𝙾𝚃'
global.botname = '𝙃𝙖𝙩𝙨𝙪𝙣𝙚-𝙐𝙡𝙩𝙧𝙖𝘽𝙤𝙩'
global.wm = 'ʜᴛs-ʙᴏᴛ'
global.author = '© 𝗆𝖺𝖽𝖾 𝖻𝗒 𝖾𝗋𝖾𝗇𝗑𝗓𝗒'
global.dev = '© 𝗉𝗈𝗐𝖾𝗋𝖾𝖽 𝖻𝗒 𝖾𝗋𝖾𝗇𝗑𝗓𝗒'
global.textbot = '𝗛𝗮𝘁𝘀𝘂𝗻𝗲𝗨𝗹𝘁𝗿𝗮, ᴍᴀᴅᴇ ʙʏ ᴇʀᴇɴxᴢʏ'
global.etiqueta = 'ˣᶻʸ'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.moneda = '¥enes'
global.welcom1 = '➪ 𝘌𝘥𝘪𝘵𝘢 𝘊𝘰𝘯 𝘌𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘚𝘦𝘵𝘸𝘦𝘭𝘤𝘰𝘮𝘦'
global.welcom2 = '➪ 𝘌𝘥𝘪𝘵𝘢 𝘊𝘰𝘯 𝘌𝘭 𝘊𝘰𝘮𝘢𝘯𝘥𝘰 𝘚𝘦𝘵𝘣𝘺𝘦'
global.banner = 'https://cdn.russellxz.click/dfff3cd2.jpeg'
global.avatar = 'https://cdn.russellxz.click/f3264545.jpeg'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.gp1 = 'https://chat.whatsapp.com/KT1uL01TeY7FJachOJtC83?mode=ac_t'
global.comunidad1 = 'https://chat.whatsapp.com/KT1uL01TeY7FJachOJtC83?mode=ac_t'
global.channel = 'https://whatsapp.com/channel/0029VbBBn9R4NViep4KwCT3Z'
global.channel2 = 'https://whatsapp.com/channel/0029VauhV0E0QeafF9ikAB1G'
global.md = 'https://github.com/The-King-Destroy/Yuki_Suou-Bot'
global.correo = 'erenxz01@gmail.com'

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.catalogo = fs.readFileSync('./src/catalogo.jpg');
global.estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: packname, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.ch = {
ch1: '120363341909397115@newsletter',
}
global.multiplier = 60

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment   

//*─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─⭒─ׄ─ׅ─ׄ─*

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'settings.js'"))
  import(`${file}?update=${Date.now()}`)
})
