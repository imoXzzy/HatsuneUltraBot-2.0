let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `🌸🎤 𝐇𝐚𝐭𝐬𝐮𝐧𝐞-𝐔𝐥𝐭𝐫𝐚𝐁𝐨𝐭 🎤🌸\n\n${emoji}  ¡Adiós a todos! 💖\nEl Bot se despide con una sonrisa (≧ω≦)ゞ\n\n✨ ¡Sigan brillando al ritmo de Miku! ✨`);
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = ['salir','leavegc','salirdelgrupo','leave']
handler.group = true
handler.rowner = true

export default handler