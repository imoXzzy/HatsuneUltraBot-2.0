const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command, usedPrefix }) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const customEmoji = global.db.data.chats[m.chat]?.customEmoji || '🌸';
  m.react(customEmoji);

  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const mensaje = args.join` ` || '¡Hatsune Ultra quiere verlos activos! 🎶';
  const titulo = `🌸🎤  𝐈𝐍𝐕𝐎𝐂𝐀𝐂𝐈𝐎𝐍 𝐃𝐄 𝐇𝐀𝐓𝐒𝐔𝐍𝐄 𝐔𝐋𝐓𝐑𝐀 🎤🌸`;
  const subtitulo = `✨♪ ¡Escuchen el llamado de la diva virtual! ♪✨\n⚡ ${mensaje}\n\n🎵 *みんな集まって！一緒に楽しもう！*\n"¡Todos reúnanse! ¡Divirtámonos juntos!"`;

  let teks = `${titulo}\n\n${subtitulo}\n\n╭━━━〔 👥 𝐌𝐈𝐄𝐌𝐁𝐑𝐎𝐒 (${participants.length}) 〕━━━╮\n`;
  for (const mem of participants) {
    teks += `┃ ${customEmoji} @${mem.id.split('@')[0]}\n`;
  }
  teks += `╰━━━━━━━━━━━━━━━━━━━━━━╯\n\n🔔 ¡Vamos, despierta ese espíritu vocaloid! 🔔`;

  conn.sendMessage(m.chat, { text: teks, mentions: participants.map((a) => a.id) });
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['group'];
handler.command = ['todos', 'invocar', 'tagall'];
handler.admin = true;
handler.group = true;

export default handler;