import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
  await m.react('🏙️') 

  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  let user = global.db.data.users[userId]
  let name = await conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length
  let totalCommands = Object.values(global.plugins).filter(v => v.help && v.tags).length

  let txt = `
┌─〔 🌸 𝑯𝑨𝑻𝑺𝑼𝑵𝑬 𝑴𝑬𝑵𝑼 𝑼𝑳𝑻𝑹𝑨 🌸 〕─┐
│ ✎ Usuario: @${userId.split('@')[0]}
│ ✎ Modo: Privada
│ ✎ Bot: *${botname}*
│ ✎ Tipo: ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Sub Bot 🅑')}
│ ✎ Activa: ${uptime}
│ ✎ Usuarios: ${totalreg}
│ ✎ Comandos: ${totalCommands}
│ ✎ Plataforma: Baileys-MD
└────────────────────────────┘

┏━🧾 𝗜𝗡𝗙𝗢 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 ━┓
┃ menu | help | infobot
┃ uptime | status | system
┃ funciones | sc | serbot
┃ speed | reporte | links | code
┗━━━━━━━━━━━━━━━━━━━┛

┏━🔍 𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥𝗘𝗦 ━┓
┃ ytsearch | pinterest | google
┃ githubsearch | cuevana | infoanime
┃ xnxxsearch | xvsearch | phsearch
┃ npmjs | tiktoksearch | imagen
┗━━━━━━━━━━━━━━━━━━━━┛

┏━📥 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ━┓
┃ play | ytmp3 | ytmp4
┃ tt | fb | ig | x
┃ mediafire | mega | terabox
┃ gitclone | npmdl | ttmp3 | tts
┗━━━━━━━━━━━━━━━━━━━┛

┏━💰 𝗘𝗖𝗢𝗡𝗢𝗠𝗜𝗔 ━┓
┃ work | cf | crime | ruleta
┃ cartera | banco | deposit | with
┃ daily | weekly | cofre | monthly
┃ aventura | hunt | mine | mazmorra
┃ steal | robarxp | eboard
┗━━━━━━━━━━━━━━━━━━┛

┏━🎲 𝗚𝗔𝗖𝗛𝗔 ━┓
┃ rollwaifu | claim | harem
┃ waifusboard | vote
┃ charinfo | charimage | givechar
┗━━━━━━━━━━━━━━┛

┏━🧩 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 ━┓
┃ sticker | toimg | wm
┃ ttp | attp | qc
┃ setmeta | delmeta | emojimix
┗━━━━━━━━━━━━━━┛

┏━🛠️ 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 ━┓
┃ whatmusic | ss | length
┃ calcular | letra | tiempo
┃ horario | say | translate
┃ enhance | read | todoc
┗━━━━━━━━━━━━━━━━━━━━┛

┏━📝 𝗣𝗘𝗥𝗙𝗜𝗟 ━┓
┃ reg | profile | unreg
┃ marry | divorce
┃ setgenre | setbirth | setdescription
┃ delgenre | delbirth | deldescription
┃ level | lb | premium
┗━━━━━━━━━━━━━━━┛

┏━👥 𝗚𝗥𝗨𝗣𝗢𝗦 ━┓
┃ link | restablecer
┃ setwelcome | setbye
┃ add | kick | promote | demote
┃ gpname | gpdesc | gpbanner
┃ advertir | unwarn | advlist
┃ mute | unmute | delete
┃ encuesta | grupo
┗━━━━━━━━━━━━━━┛

┏━🌸 𝗔𝗡𝗜𝗠𝗘 ━┓
┃ angry | cry | blush | hug
┃ kiss | love | impregnate
┃ sleep | noches | dias
┃ facepalm | laugh | scared
┗━━━━━━━━━━━━┛

┏━🔞 𝗡𝗦𝗙𝗪 ━┓
┃ fuck | blowjob | spank
┃ lickpussy | boobjob | bath
┃ undress | cum | fap | suckboobs
┗━━━━━━━━━━━┛

┏━🎮 𝗝𝗨𝗘𝗚𝗢𝗦 ━┓
┃ chiste | piropo | frase | facto
┃ formarpareja | ship | personalidad
┃ ppt | mates | ahorcado
┃ pregunta | sorteo | top
┗━━━━━━━━━━━━━━┛`.trim()

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
  }, { quoted: m })
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