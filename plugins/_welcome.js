// plugins/welcome.js

let handler = async (m, { conn }) => {
  // Obtenemos info del grupo
  let chat = global.db.data.chats[m.chat]
  let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
  let groupSize = groupMetadata.participants.length

  // Imagen para la bienvenida (puedes cambiar el link)
  let img = 'https://cdn.russellxz.click/459c99c9.jpeg'

  // Mensaje de bienvenida
  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `╭━━━〔 🌸 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 🌸 〕━━━╮
┃ ✦ Hola @${m.messageStubParameters[0].split`@`[0]}!
┃ ✦ Bienvenido a *${groupMetadata.subject}*
┃ ✦ ${global.welcom1 || 'Nos alegra tenerte aquí 💖'}
┃ ✦ Ahora somos *${groupSize}* miembros 🎉
┃ ✦ Disfruta tu estadía con nosotros 🐾
┃ ✐ Más info aquí: 🌐 https://erenxsit.vercel.app
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=^●ω●^=)• ¡Esperamos que la pases genial!`

    await conn.sendMessage(m.chat, { image: { url: img }, caption: bienvenida, mentions: [m.messageStubParameters[0]] })
  }

  // Mensaje de despedida
  if (chat.welcome && m.messageStubType == 28) {
    let bye = `╭━━━〔 🌙 𝑫𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂 🌙 〕━━━╮
┃ ✦ Adiós @${m.messageStubParameters[0].split`@`[0]}
┃ ✦ ${global.welcom2 || 'Esperamos verte pronto 💫'}
┃ ✦ Ahora somos *${groupSize}* miembros
┃ ✦ ¡Te extrañaremos en el grupo! 🌌
┃ ✐ Más info aquí: 🌐 https://erenxsit.vercel.app
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=^●ω●^=)• ¡Suerte en tu camino!`

    await conn.sendMessage(m.chat, { image: { url: img }, caption: bye, mentions: [m.messageStubParameters[0]] })
  }
}

export default handler