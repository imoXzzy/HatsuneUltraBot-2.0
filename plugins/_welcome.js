// plugins/welcome.js
export default async function (update, conn) {
  try {
    const { id, participants, action } = update
    const groupMetadata = await conn.groupMetadata(id)
    const groupSize = groupMetadata.participants.length
    const imgUrl = 'https://cdn.russellxz.click/459c99c9.jpeg'

    for (let user of participants) {
      if (action === 'add') {
        // ✅ Bienvenida
        let bienvenida = `╭━━━〔 🌸 𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐 🌸 〕━━━╮
┃ ✦ Hola @${user.split`@`[0]}!
┃ ✦ Bienvenido a *${groupMetadata.subject}*
┃ ✦ ${global.welcom1 || 'Nos alegra tenerte aquí 💖'}
┃ ✦ Ahora somos *${groupSize}* miembros 🎉
┃ ✦ Disfruta tu estadía con nosotros 🐾
┃ ✐ Más info aquí: 🌐 https://erenxsit.vercel.app
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=^●ω●^=)• ¡Esperamos que la pases genial!`

        await conn.sendMessage(id, {
          image: { url: imgUrl },
          caption: bienvenida,
          mentions: [user]
        })
      } else if (action === 'remove') {
        // ✅ Despedida / Kick
        let bye = `╭━━━〔 🌙 𝑫𝒆𝒔𝒑𝒆𝒅𝒊𝒅𝒂 🌙 〕━━━╮
┃ ✦ Adiós @${user.split`@`[0]}
┃ ✦ ${global.welcom2 || 'Esperamos verte pronto 💫'}
┃ ✦ Ahora somos *${groupSize}* miembros
┃ ✦ ¡Te extrañaremos en el grupo! 🌌
┃ ✐ Más info aquí: 🌐 https://erenxsit.vercel.app
╰━━━━━━━━━━━━━━━━━━━━━━╯
•(=^●ω●^=)• ¡Suerte en tu camino!`

        await conn.sendMessage(id, {
          image: { url: imgUrl },
          caption: bye,
          mentions: [user]
        })
      }
    }
  } catch (e) {
    console.error(e)
  }
}