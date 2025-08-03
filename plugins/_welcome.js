// plugins/welcome.js
import fs from 'fs'

let handler = async (m, { conn }) => {
  if (!m.isGroup) return
  let chat = global.db.data.chats[m.chat]
  let groupMetadata = await conn.groupMetadata(m.chat)
  let groupSize = groupMetadata.participants.length

  // ✅ Detecta entradas
  if (chat.welcome && m.messageStubType == 27) {
    let user = m.messageStubParameters[0]
    let bienvenida = `╭━━━〔 🌸 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 🌸 〕━━━╮
┃ ✦ Hola @${user.split`@`[0]}!
┃ ✦ Bienvenido a *${groupMetadata.subject}*
┃ ✦ ${global.welcom1 || 'Nos alegra tenerte aquí 💖'}
┃ ✦ Ahora somos *${groupSize}* miembros 🎉
┃ ✦ Disfruta tu estadía con nosotros 🐾
┃ ✐ Más info aquí: 🌐 https://erenxsit.vercel.app
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=^●ω●^=)• ¡Esperamos que la pases genial!`

    await conn.sendMessage(m.chat, {
      text: bienvenida,
      mentions: [user]
    })
  }

  // ✅ Detecta salidas
  if (chat.welcome && m.messageStubType == 28) {
    let user = m.messageStubParameters[0]
    let bye = `╭━━━〔 🌙 𝑫𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂 🌙 〕━━━╮
┃ ✦ Adiós @${user.split`@`[0]}
┃ ✦ ${global.welcom2 || 'Esperamos verte pronto 💫'}
┃ ✦ Ahora somos *${groupSize}* miembros
┃ ✦ ¡Te extrañaremos en el grupo! 🌌
┃ ✐ Más info aquí: 🌐 https://erenxsit.vercel.app
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=^●ω●^=)• ¡Suerte en tu camino!`

    await conn.sendMessage(m.chat, {
      text: bye,
      mentions: [user]
    })
  }
}

export default handler