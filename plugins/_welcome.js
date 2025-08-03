// plugins/welcome.js
let handler = async (m, { conn }) => {
  if (!m.isGroup) return
  let chat = global.db.data.chats[m.chat]
  if (!chat.welcome) return

  let groupMetadata = await conn.groupMetadata(m.chat)
  let groupSize = groupMetadata.participants.length
  let user = m.messageStubParameters[0]

  const imgUrl = 'https://cdn.russellxz.click/459c99c9.jpeg'

  // ✅ Bienvenida
  if (m.messageStubType == 27) {
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
      image: { url: imgUrl },
      caption: bienvenida,
      mentions: [user]
    })
  }

  // ✅ Kick (expulsión por admin)
  if (m.messageStubType == 28 && m.participant && m.participant !== user) {
    let kick = `╭━━━〔 ⚔️ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝑬𝒙𝒑𝒖𝒍𝒔𝒂𝒅𝒐 ⚔️ 〕━━━╮
┃ ✦ El usuario @${user.split`@`[0]} ha sido expulsado.
┃ ✦ Ahora somos *${groupSize}* miembros.
┃ ✦ Respeta las normas para evitar ser removido.
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=｀ω´=)• Justicia servida.`

    await conn.sendMessage(m.chat, {
      image: { url: imgUrl },
      caption: kick,
      mentions: [user]
    })
  }

  // ✅ Despedida normal (cuando alguien se va solo)
  if (m.messageStubType == 28 && (!m.participant || m.participant === user)) {
    let bye = `╭━━━〔 🌙 𝑫𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂 🌙 〕━━━╮
┃ ✦ Adiós @${user.split`@`[0]}
┃ ✦ ${global.welcom2 || 'Esperamos verte pronto 💫'}
┃ ✦ Ahora somos *${groupSize}* miembros.
┃ ✦ ¡Te extrañaremos en el grupo! 🌌
┃ ✐ Más info aquí: 🌐 https://erenxsit.vercel.app
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=^●ω●^=)• ¡Suerte en tu camino!`

    await conn.sendMessage(m.chat, {
      image: { url: imgUrl },
      caption: bye,
      mentions: [user]
    })
  }
}

export default handler