var handler = async (m, { conn, participants, usedPrefix, command }) => {

  // 🎀 30 BORDES ALEATORIOS ESTILO MIKU
  const bordes = [
    ["╭🌸💙🎤「 MIKU KICK 」🎤💙🌸╮", "╰🌸💙🌟 Bye Bye 🌟💙🌸╯"],
    ["💿💚✦ Vocaloid Expulsión ✦💚💿", "💿💚✦ Usuario fuera ✦💚💿"],
    ["🌟🎧⌈ MikuGroup ⌋🎧🌟", "🌟🎧⌈ Arigatou~ ⌋🎧🌟"],
    ["🌸💠『 Miku está vigilando 』💠🌸", "🌸💠『 Expulsión realizada 』💠🌸"],
    ["🎀💎⌜🎤 MikuBot Kick 🎤⌟💎🎀", "🎀💎⌜ Adiós Senpai~ ⌟💎🎀"],
    ["💚✨⌈ Bye Bye User ⌋✨💚", "💚✨⌈ Miku lo dice~ ⌋✨💚"],
    ["🫧🎤╭━━━━ Bye ━━━━╮🎤🫧", "🫧🎤╰━━━━ Senpai ━━━━╯🎤🫧"],
    ["💠🌸【 Grupo Vocaloid 】🌸💠", "💠🌸【 Kick Realizado 】🌸💠"],
    ["💙🌟『 Expulsando... 』🌟💙", "💙🌟『 Listo~ 🎵 』🌟💙"],
    ["🎧💚《──── KICK ────》💚🎧", "🎧💚《──── DONE ────》💚🎧"],
    ["✧✿ Vocaloid Justice ✿✧", "✧✿ Vocaloid Clear ✿✧"],
    ["🎀🌈【 MikuMode Kick 】🌈🎀", "🎀🌈【 Done with love 💙 】🌈🎀"],
    ["🌸🎶(ノ◕ヮ◕)ノ*:･ﾟ✧", "(ノ◕ヮ◕)ノ*:･ﾟ✧さようなら~"],
    ["💎🔊✧ User fuera ✧🔊💎", "💎🔊✧ Mic cerrado ✧🔊💎"],
    ["🌟🎧 *Bip Bip* 🎧🌟", "🌟🎧 *Usuario Kickeado* 🎧🌟"],
    ["💿🌸🎶⌈ Senpai fuera ⌋🎶🌸💿", "💿🌸🎶⌈ Miku feliz~ ⌋🎶🌸💿"],
    ["🎤💙⚡ *Miku Clean Mode* ⚡💙🎤", "🎤💙⚡ *Grupo purificado* ⚡💙🎤"],
    ["✨⌈ Delete IDOL MODE ⌋✨", "✨⌈ Bye Bye Cutie~ ⌋✨"],
    ["🌀💚⌜ Out of Stage ⌟💚🌀", "🌀💚⌜ Thank you~ ⌟💚🌀"],
    ["✿✧ Vocaloid Protocol ✧✿", "✿✧ Expulsado ✧✿"],
    ["🎀🌸💎╭Bye╮💎🌸🎀", "🎀🌸💎╰User╯💎🌸🎀"],
    ["🌸💙╭ Miku Justice ╮💙🌸", "🌸💙╰ Adiós ╯💙🌸"],
    ["💿🎧┏ VOCALOID ┓🎧💿", "💿🎧┗ KICK ┛🎧💿"],
    ["💚✨⌈ Bye Bye Idol ⌋✨💚", "💚✨⌈ Modo activo ⌋✨💚"],
    ["🎧💙╭────────────╮", "╰────────────╯💙🎧"],
    ["💠🎤 Vocaloid-Guard 🎤💠", "💠🎤 Acción completa 🎤💠"],
    ["💎🎀✧ VocaloKick ✧🎀💎", "💎🎀✧ ✧Hecho con amor✧ 🎀💎"],
    ["🌟🎧 Vocaloid Team 🎧🌟", "🌟🎧 Usuario fuera 🎧🌟"],
    ["💙🌸☁️『 MikuModo 』☁️🌸💙", "💙🌸☁️『 Acción Realizada 』☁️🌸💙"],
    ["💿✨⌈ El escenario se limpia ⌋✨💿", "💿✨⌈ 🎵 Usuario afuera 🎵 ⌋✨💿"],
    ["🎀🌈 *Vocaloid Security* 🌈🎀", "🎀🌈 *Comando ejecutado* 🌈🎀"]
  ];

  const [borde1, borde2] = bordes[Math.floor(Math.random() * bordes.length)];

  // ❌ No mencionó a nadie
  if (!m.mentionedJid[0] && !m.quoted) {
    return conn.reply(m.chat, `${borde1}\n\n💬 *Debes mencionar a alguien para expulsarlo del grupo!*\n🎤 Ejemplo: *${usedPrefix}${command} @usuario*\n\n${borde2}`, m)
  }

  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;

  const groupInfo = await conn.groupMetadata(m.chat);
  const ownerGroup = groupInfo.owner || m.chat.split`-`[0] + '@s.whatsapp.net';
  const ownerBot = global.owner[0][0] + '@s.whatsapp.net';

  // ⛔ No puede botearse
  if (user === conn.user.jid) {
    return conn.reply(m.chat, `${borde1}\n\n💿 *Miku no puede autoexpulsarse~*\n\n${borde2}`, m)
  }

  if (user === ownerGroup) {
    return conn.reply(m.chat, `${borde1}\n\n🔒 *No puedo expulsar al propietario del grupo. Vocaloid respeto máximo~*\n\n${borde2}`, m)
  }

  if (user === ownerBot) {
    return conn.reply(m.chat, `${borde1}\n\n🌟 *No puedo expulsar al dueño del bot. Él creó a Miku después de todo~*\n\n${borde2}`, m)
  }

  await conn.groupParticipantsUpdate(m.chat, [user], 'remove')

  conn.reply(m.chat, `${borde1}\n\n🎤 *El usuario fue eliminado del grupo.*\n💙 *Miku lo hizo con amor~*\n\n${borde2}`, m)
}

handler.help = ['kick']
handler.tags = ['grupo']
handler.command = ['kick', 'echar', 'hechar', 'sacar', 'ban']
handler.admin = true
handler.group = true
handler.register = true
handler.botAdmin = true

export default handler
