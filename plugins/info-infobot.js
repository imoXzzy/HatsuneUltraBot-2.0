import db from '../lib/database.js'
import { cpus as _cpus, totalmem, freemem, platform, hostname } from 'os'
import speed from 'performance-now'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
  std: 'JEDEC',
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix }) => {
  let bot = global.db.data.settings[conn.user.jid]
  let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => total + stat.total, 0)
  let totalf = Object.values(global.plugins).filter((v) => v.help && v.tags).length

  // 🌸 Bordes totalmente decorados estilo Hatsune Miku (20 estilos)
  const bordesMiku = [
    ["╭🌸🌟🌈🌟🌸╮", "╰🌸🌟🌈🌟🌸╯"],
    ["✿┏彡💙🎤 MIKU ZONE 🎤💙彡┓✿", "✿┗彡💚🎶 VOCALOID 🎶💚彡┛✿"],
    ["💎💚╭━━━🌸MIKU🌸━━━╮💚💎", "💎💚╰━━━🎧INFO🎧━━━╯💚💎"],
    ["🌈🎶🔊《『", "』》🔊🎶🌈"],
    ["🔹🌟💠MikuBot Info💠🌟🔹", "🔹🌟💠Suki desu~💠🌟🔹"],
    ["💚🎧💫┏━━━━━━━━━━━━━━┓", "┗━━━━━━━━━━━━━━┛💫🎧💚"],
    ["🌸💿╭━M I K U━╮💿🌸", "🌸💿╰━B O T━╯💿🌸"],
    ["🎀🌟🌊✧ Info ✧🌊🌟🎀", "🎀🌟🌊✧ Desu~ ✧🌊🌟🎀"],
    ["★彡[ 💙 MIKU STATUS 💙 ]彡★", "★彡[ 💚 Arigatou~ 💚 ]彡★"],
    ["🎧💙⟦ Vocaloid Core ⟧💙🎧", "🎧💙⟦ System Ready ⟧💙🎧"],
    ["💠✦⌈MikuBot Report⌋✦💠", "💠✦⌈Performance Log⌋✦💠"],
    ["⛩️💚🎵「 Miku Scan 」🎵💚⛩️", "⛩️💚🎵「 Harmony End 」🎵💚⛩️"],
    ["🎤🌸🌼🍬🌟「", "」🌟🍬🌼🌸🎤"],
    ["💿🌈🎧╭✿Kawaii Info✿╮🎧🌈💿", "💿🌈🎧╰✿Miku Love✿╯🎧🌈💿"],
    ["🎼💚《━━━━━━》💚🎼", "🎼💚《━━━━━━》💚🎼"],
    ["🌸🎧🫧╭━━━━༺MIKU༻━━━━╮🫧🎧🌸", "🌸🎧🫧╰━━━━༺BOT༻━━━━╯🫧🎧🌸"],
    ["╔═══════ஜ۩۞۩ஜ═══════╗", "╚═══════ஜ۩۞۩ஜ═══════╝"],
    ["✦╭──• Miku Diagnostic •──╮✦", "✦╰──• System Sync •──╯✦"],
    ["(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ * MIKU * ✧ﾟ･:ヽ(◕ヮ◕ヽ)", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ * ARIGATOU * ✧ﾟ･:ヽ(◕ヮ◕ヽ)"],
    ["╭🌟💙🌈🎤 HATSUNE STATUS 🎤🌈💙🌟╮", "╰🌟💙🌈🎶 SYSTEM OK 🎶🌈💙🌟╯"]
  ]
  const [inicio, fin] = bordesMiku[Math.floor(Math.random() * bordesMiku.length)]

  let info = `
${inicio}

🎤 *Prefijo:* ${usedPrefix}
🎶 *Plugins Activos:* ${totalf}
💿 *Comandos Usados:* ${toNum(totalStats)} ( ${totalStats} )

🌸 *PLATAFORMA:*
💻 Plataforma: ${platform()}
🖥️ Servidor: ${hostname()}
📀 RAM usada: ${format(totalmem() - freemem())} / ${format(totalmem())}
🎧 RAM libre: ${format(freemem())}

🎼 *NodeJS Memory:*
${'```' + Object.keys(process.memoryUsage()).map(key => `${key}: ${format(process.memoryUsage()[key])}`).join('\n') + '```'}

${fin}
`.trim()

  await conn.reply(m.chat, info, fkontak, { contextInfo: { mentionedJid: [owner[0][0] + '@s.whatsapp.net'] } })
}

handler.help = ['botinfo']
handler.tags = ['info']
handler.command = ['info', 'botinfo', 'infobot']

export default handler

function toNum(number) {
  if (number >= 1000 && number < 1000000) return (number / 1000).toFixed(1) + 'k'
  else if (number >= 1000000) return (number / 1000000).toFixed(1) + 'M'
  else if (number <= -1000 && number > -1000000) return (number / 1000).toFixed(1) + 'k'
  else if (number <= -1000000) return (number / 1000000).toFixed(1) + 'M'
  else return number.toString()
}
