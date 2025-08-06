import db from '../lib/database.js'
import fs from 'fs'
import PhoneNumber from 'awesome-phonenumber'
import { createHash } from 'crypto'
import fetch from 'node-fetch'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { conn, text, usedPrefix, command }) {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let mentionedJid = [who]
  let pp = await conn.profilePictureUrl(who, 'image').catch(() => 'https://cdn.russellxz.click/7938403b.jpeg')
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)

  if (user.registered === true) return m.reply(`『✦』Ya estás registrado.\n\n¿Quieres volver a registrarte?\nUsa *${usedPrefix}unreg* para eliminar tu registro.`)
  if (!Reg.test(text)) return m.reply(`『✦』Formato incorrecto.\n\nUso: *${usedPrefix + command} nombre.edad*\nEjemplo: *${usedPrefix + command} ${name2}.18*`)

  let [_, name, splitter, age] = text.match(Reg)
  if (!name) return m.reply(`『✦』El nombre no puede estar vacío.`)
  if (!age) return m.reply(`『✦』La edad no puede estar vacía.`)
  if (name.length >= 100) return m.reply(`『✦』El nombre es demasiado largo.`)

  age = parseInt(age)
  if (age > 1000) return m.reply(`『✦』Wow el abuelo quiere jugar con el bot.`)
  if (age < 5) return m.reply(`『✦』¡Un bebé con WhatsApp! xD`)

  user.name = name + '✓'
  user.age = age
  user.regTime = +new Date()
  user.registered = true
  global.db.data.users[m.sender].coin += 40
  global.db.data.users[m.sender].exp += 300
  global.db.data.users[m.sender].joincount += 20

  let sn = createHash('md5').update(m.sender).digest('hex').slice(0, 20)

  // 30 BORDES Y ENCABEZADOS ALEATORIOS
  const bordes = [
    ['╭─🌟──────────────────────────🌟─╮', '╰─🌟──────────────────────────🌟─╯'],
    ['╭═══💙═══⊹⊱✿⊰⊹═══💙═══╮', '╰═══💙═══⊹⊱✿⊰⊹═══💙═══╯'],
    ['╔═════🎧═════╗', '╚═════🎧═════╝'],
    ['╭━━━✧🎀✧━━━╮', '╰━━━✧🎀✧━━━╯'],
    ['╔─────❀─────╗', '╚─────❀─────╝'],
    ['★彡━━━━━🪐━━━━━彡★', '★彡━━━━━━━━━━━━━━彡★'],
    ['╭───────────────╮', '╰───────────────╯'],
    ['🌀════════════════════🌀', '🌀════════════════════🌀'],
    ['╭🌈━━━⊰✿⊱━━━🌈╮', '╰🌈━━━⊰✿⊱━━━🌈╯'],
    ['✦══════⊹⊱✿⊰⊹══════✦', '✦════════════════════✦'],
    ['✿━☆ﾟ.*･｡ﾟ────────────', '────────────ﾟ｡･*.ﾟ☆━✿'],
    ['╭━━━━━━♡♡♡━━━━━━╮', '╰━━━━━━♡♡♡━━━━━━╯'],
    ['🌸･*:.｡.✿.｡.:*･🌸', '🌸･*:.｡.✿.｡.:*･🌸'],
    ['╔═══🌺═══╗', '╚═══🌺═══╝'],
    ['🩷═───────═🩷', '🩷═───────═🩷'],
    ['╭━━━🔷━━━╮', '╰━━━🔷━━━╯'],
    ['🍡━━═━═━═━━🍡', '🍡━━═━═━═━━🍡'],
    ['╭🌼──────────────╮', '╰──────────────🌼╯'],
    ['╭═══════📀═══════╮', '╰═══════📀═══════╯'],
    ['🎵⋆｡˚☁︎˚｡⋆｡', '｡⋆˚☁︎˚｡⋆🎵'],
    ['╔═════🔊═════╗', '╚═════🔊═════╝'],
    ['╭➤🎙️━━━🎧➤', '╰➤🎧━━━🎙️➤'],
    ['╭━━⭑｡˚☽˚｡⭑━━╮', '╰━━⭑｡˚☾˚｡⭑━━╯'],
    ['┌─────⊱♡⊰─────┐', '└─────⊱♡⊰─────┘'],
    ['🌼━━━☆ﾟ.*･｡ﾟ━━━🌼', '🌼━━━☆ﾟ.*･｡ﾟ━━━🌼'],
    ['╭─➤🌸━━🌟━━🌸➤─╮', '╰─➤🌸━━🌟━━🌸➤─╯'],
    ['╭⊰💠⊱───⊰💠⊱╮', '╰⊰💠⊱───⊰💠⊱╯'],
    ['╭🌟🌟🌟╮', '╰🌟🌟🌟╯'],
    ['🌈━━━━━━━━━━━━━━🌈', '🌈━━━━━━━━━━━━━━🌈'],
    ['╭🌺───Registro───🌺╮', '╰🌺─────────────────🌺╯']
  ]
  let borde = bordes[Math.floor(Math.random() * bordes.length)]

  let regbot = `
${borde[0]}
🎌 *USUARIO REGISTRADO*

🪪 *Nombre:* ${name}
📅 *Edad:* ${age} años

🎁 *Recompensas:*
🪙 ${global.moneda} +40
⭐ Exp: +300
🎫 Tokens: +20

ID: ${sn}
${global.dev}
${borde[1]}
`.trim()

  await m.react('✅')

  await conn.sendMessage(m.chat, {
    text: regbot,
    contextInfo: {
      externalAdReply: {
        title: '🧠 USUARIO VERIFICADO',
        body: global.textbot,
        thumbnailUrl: pp,
        sourceUrl: global.channel, // ← AQUÍ SE ENVÍA A CANAL
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: m })

  // Enviar también al canal privado
  try {
    await conn.sendMessage(global.channel, {
      text: `✅ *Nuevo usuario registrado:*\n\n🌟 Nombre: *${name}*\n🎂 Edad: *${age}*\n🔖 ID: *${sn}*\n🪪 Número: wa.me/${m.sender.split('@')[0]}`,
      contextInfo: {
        mentionedJid: [m.sender]
      }
    })
  } catch (e) {
    console.error('[❌ ERROR EN REGISTRO AL CANAL]', e)
  }
}

handler.help = ['reg']
handler.tags = ['rg']
handler.command = ['verify', 'verificar', 'reg', 'register', 'registrar']

export default handler
