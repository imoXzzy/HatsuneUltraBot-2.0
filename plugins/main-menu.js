import fetch from 'node-fetch'

const handler = async (m, { conn, args, usedPrefix }) => {
  const tag = (args[0] || '').toLowerCase()
  const userId = m.mentionedJid?.[0] || m.sender
  const name = await conn.getName(userId)
  const uptime = clockString(process.uptime() * 1000)
  const totalUsers = Object.keys(global.db.data.users).length
  const plugins = Object.values(global.plugins).filter((p) => p.help && p.tags)

 
  const categories = [...new Set(plugins.flatMap(p => p.tags))].sort()

 
  const isValidTag = categories.includes(tag)
  const listByTag = plugins.filter(p => p.tags && p.tags.includes(tag))

  
  const header = `🎐 𝑯𝑨𝑻𝑺𝑼𝑵𝑬 𝑴𝑬𝑵𝑼 𝑼𝑳𝑻𝑹𝑨 🎐
╭────[ 🧩 Info ]
│👤 Cliente: @${userId.split('@')[0]}
│🕒 Uptime: ${uptime}
│👥 Usuarios: ${totalUsers}
│🔖 Modo: Público
│🤖 Bot: ${conn.user.jid === global.conn.user.jid ? 'Principal 🅥' : 'Sub Bot 🅑'}
╰───────

`

  
  let section = ''
  if (isValidTag) {
    section = `🗂️ *Categoría:* \`${tag.toUpperCase()}\`\n\n` +listByTag
      .map((cmd) => {
        const names = Array.isArray(cmd.help) ? cmd.help : [cmd.help]
        return names.map(name => `✦ ${usedPrefix}${name}`).join('\n')
      }).join('\n')
  } else {
    section = `📌 Usa: *.menu [categoría]*\n\n📂 Categorías disponibles:\n${categories.map(t => `➤ ${t}`).join('\n')}`
  }

  const fullMenu = `${header}${section}`.trim()

  await conn.sendMessage(m.chat, {
    video: { url: 'https://cdn.russellxz.click/72b0b493.mp4' },
    gifPlayback: true,
    caption: fullMenu,
    contextInfo: {
      mentionedJid: [userId, m.sender],
      externalAdReply: {
        title: botname,
        body: textbot,
        thumbnail: await (await fetch(banner)).buffer(),
        mediaType: 2,
        mediaUrl: redes,
        sourceUrl: redes,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'help', 'menú']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor((ms % 3600000) / 60000)
  let s = Math.floor((ms % 60000) / 1000)
  return `${h}h ${m}m ${s}s`
}