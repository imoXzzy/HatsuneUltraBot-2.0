import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  // Solo para grupos y mensajes de tipo stub (entrada/salida)
  if (!m.isGroup || !m.messageStubType) return true;

  // Valida stub parameters
  const stubParams = m.messageStubParameters || [];
  if (!Array.isArray(stubParams) || stubParams.length === 0) return true;

  // Checa si el bot es admin, si quieres exigirlo
  // let bot = participants.find(u => u.id === conn.user.jid) || {};
  // if (bot?.admin !== 'admin' && bot?.admin !== 'superadmin') return true;

  // Datos de usuario
  let userJid = stubParams[0];
  if (!userJid) return true;
  let username = userJid.split('@')[0];
  let mention = '@' + username;

  // Member count seguro
  let memberCount = groupMetadata.participants?.length || participants.length || 0;
  if (m.messageStubType == 27) memberCount++; // joined
  if (m.messageStubType == 28 || m.messageStubType == 32) memberCount = Math.max(0, memberCount - 1); // left/removed

  // Avatar seguro
  let avatar;
  try {
    avatar = await conn.profilePictureUrl(userJid, 'image');
  } catch {
    avatar = 'https://cdn.russellxz.click/459c99c9.jpeg';
  }

  // Imágenes y fondo
  let guildName = encodeURIComponent(groupMetadata.subject);
  let apiBase = "https://api.siputzx.my.id/api/canvas";
  let welcomeApiUrl = `${apiBase}/welcomev2?username=${username}&guildName=${guildName}&memberCount=${memberCount}&avatar=${encodeURIComponent(avatar)}&background=${encodeURIComponent('https://files.catbox.moe/w1r8jh.jpeg')}`;
  let goodbyeApiUrl = `${apiBase}/goodbyev2?username=${username}&guildName=${guildName}&memberCount=${memberCount}&avatar=${encodeURIComponent(avatar)}&background=${encodeURIComponent('https://files.catbox.moe/w1r8jh.jpeg')}`;

  async function fetchImage(url, fallbackUrl) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Error al descargar imagen');
      return await res.buffer();
    } catch {
      const fallbackRes = await fetch(fallbackUrl);
      return await fallbackRes.buffer();
    }
  }

  // Prepara base de datos de chat
  let chat = global.db.data.chats[m.chat] || {};
  // Si no tiene bien la propiedad (grupos nuevos)
  if (typeof chat.welcome === 'undefined') chat.welcome = true;

  // Textos de bienvenida/despedida
  let txtWelcome = '🌟 New Member 🌟';
  let txtGoodbye = '🌙 Bye Member 🌙';
  let bienvenida = `🌟 *Bienvenido* a ${groupMetadata.subject}\n✰ ${mention}\n${global.welcom1 || ''}\n📊 Ahora somos ${memberCount} Miembros. Disfruta tu estadía en el grupo!\n> ✐ mas info
https://xzysitweb.vercel.app`;
  let bye = `🌙 *Adiós* de ${groupMetadata.subject}\n✨ ${mention}\n${global.welcom2 || ''}\n📊 Ahora somos ${memberCount} Miembros.\n> más info https://xzysitweb.vercel.app`;

  // Las variables "dev", "redes", "fkontak" deben estar bien definidas
  let dev = global.dev || '';
  let redes = global.redes || '';
  let fkontak = global.fkontak || {};

  // Envía welcome/bye si corresponde
  if (chat.welcome) {
    if (m.messageStubType == 27) { // joined
      let imgBuffer = await fetchImage(welcomeApiUrl, avatar);
      try {
        await conn.sendMini?.(m.chat, txtWelcome, dev, bienvenida, imgBuffer, imgBuffer, redes, fkontak)
      } catch {
        // Fallback a sendMessage normal
        await conn.sendMessage(m.chat, { image: imgBuffer, caption: bienvenida, mentions: [userJid] }, { quoted: m });
      }
    } else if (m.messageStubType == 28 || m.messageStubType == 32) { // left/kicked
      let imgBuffer = await fetchImage(goodbyeApiUrl, avatar);
      try {
        await conn.sendMini?.(m.chat, txtGoodbye, dev, bye, imgBuffer, imgBuffer, redes, fkontak)
      } catch {
        await conn.sendMessage(m.chat, { image: imgBuffer, caption: bye, mentions: [userJid] }, { quoted: m });
      }
    }
  }
}