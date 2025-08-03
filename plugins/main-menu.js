let handler = async (m, { conn, args }) => {
let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
let user = global.db.data.users[userId]
let name = conn.getName(userId)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

let txt = `
╭━━〔 𝑯𝑨𝑻𝑺𝑼𝑵𝑬 𝑴𝑬𝑵𝑼 𝑼𝑳𝑻𝑹𝑨 ฅ^•ﻌ•^ฅ 〕━━╮
┃ 👤 Usuario: @${userId.split('@')[0]}
┃ 🧿 Modo: Publico
┃ 🤖 Bot: *${botname}*
┃ 🔰 Tipo: ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub Bot 🅑')}
┃ ⏱️ Activa: ${uptime}
┃ 🧮 Usuarios: ${totalreg}
┃ 🧩 Comandos: ${totalCommands}
┃ 📡 Plataforma: Baileys-MD
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 💠 𝙸𝚗𝚏𝚘 𝙱𝚘𝚝 〕━━━╮
┃ ✦ menu | help
┃ ✦ uptime | runtime
┃ ✦ infobot
┃ ✦ status | estado
┃ ✦ system | sistema
┃ ✦ funciones | totalfunciones
┃ ✦ sc | script
┃ ✦ serbot | bots
┃ ✦ speed | ping
┃ ✦ reporte | reportar
┃ ✦ links | grupos
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔍 𝙱𝚞𝚜𝚌𝚊𝚍𝚘𝚛𝚎𝚜 〕━━━╮
┃ ✦ ytsearch | tiktoksearch
┃ ✦ pin | imagen | pinterest
┃ ✦ google | githubsearch
┃ ✦ cuevana | infoanime
┃ ✦ xnxxsearch | xvsearch | phsearch
┃ ✦ npmjs
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 📥 𝙳𝚎𝚜𝚌𝚊𝚛𝚐𝚊𝚜 〕━━━╮
┃ ✦ play | ytmp3 | ytmp4
┃ ✦ tt | fb | ig | x
┃ ✦ mediafire | mega | terabox
┃ ✦ gitclone | npmdl
┃ ✦ tiktokrandom | ttmp3 | tts
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 💰 𝙴𝚌𝚘𝚗𝚘𝚖í𝚊  〕━━━╮
┃ ✦ work | cf | crime | ruleta
┃ ✦ cartera | banco | deposit | with | transfer
┃ ✦ daily | cofre | weekly | monthly
┃ ✦ aventura | mazmorra | hunt | mine
┃ ✦ steal | robarxp
┃ ✦ eboard
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎲 𝙶𝚊𝚌𝚑𝚊 〕━━━╮
┃ ✦ rollwaifu | claim | harem
┃ ✦ waifusboard | vote
┃ ✦ charinfo | charimage
┃ ✦ givechar
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧩 𝚂𝚝𝚒𝚌𝚔𝚎𝚛𝚜 〕━━━╮
┃ ✦ sticker | toimg | wm
┃ ✦ ttp | attp | qc
┃ ✦ setmeta | delmeta
┃ ✦ emojimix
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🛠️ 𝙷𝚎𝚛𝚛𝚊𝚖𝚒𝚎𝚗𝚝𝚊𝚜 〕━━━╮
┃ ✦ whatmusic | ss | length
┃ ✦ calcular | letra
┃ ✦ tiempo | horario
┃ ✦ say | translate
┃ ✦ enhance | read | todoc
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🙍 𝙿𝚎𝚛𝚏𝚒𝚕 〕━━━╮
┃ ✦ reg | profile | unreg
┃ ✦ marry | divorce
┃ ✦ setgenre | setbirth | setdescription
┃ ✦ delgenre | delbirth | deldescription
┃ ✦ level | lb | premium
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧑‍🤝‍🧑 𝙶𝚛𝚞𝚙𝚘𝚜 〕━━━╮
┃ ✦ link | restablecer | setwelcome | setbye
┃ ✦ add | kick | promote | demote
┃ ✦ gpname | gpdesc | gpbanner
┃ ✦ advertir | unwarn | advlist
┃ ✦ mute | unmute | delete
┃ ✦ encuesta | grupo
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🧸 𝙰𝚗𝚒𝚖𝚎 〕━━━╮
┃ ✦ angry | cry | blush | hug
┃ ✦ kiss | love | impregnate
┃ ✦ sleep | noches | dias
┃ ✦ facepalm | laugh | scared
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🔞 𝙽𝚂𝙵𝚆 〕━━━╮
┃ ✦ fuck | blowjob | spank
┃ ✦ lickpussy | boobjob
┃ ✦ bath | undress
┃ ✦ cum | fap | suckboobs
╰━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 🎮 𝙹𝚞𝚎𝚐𝚘𝚜 〕━━━╮
┃ ✦ chiste | piropo | frase | facto
┃ ✦ formarpareja | ship | personalidad
┃ ✦ ppt | mates | ahorcado
┃ ✦ pregunta | sorteo | top
╰━━━━━━━━━━━━━━━━━━━━━━━╯`.trim()

/* await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
externalAdReply: {                
title: botname,
body: textbot,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: true
}}}, { quoted: m }) */

await conn.sendMessage(m.chat, {
    video: { url: 'https://cdn.russellxz.click/72b0b493.mp4' },
    gifPlayback: true,
    caption: txt,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
      },
    }
  },
  {
    quoted: m
  });
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
let seconds = Math.floor((ms / 1000) % 60)
let minutes = Math.floor((ms / (1000 * 60)) % 60)
let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
return `${hours}h ${minutes}m ${seconds}s`
}