import moment from 'moment-timezone';
import PhoneNumber from 'awesome-phonenumber';
import fetch from 'node-fetch';

let handler = async (m, { conn, args }) => {
    let userId;
    if (m.quoted && m.quoted.sender) {
        userId = m.quoted.sender;
    } else {
        userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    }

    let user = global.db.data.users[userId];

    let name = conn.getName(userId);
    let cumpleanos = user.birth || 'No especificado';
    let genero = user.genre || 'No especificado';
    let pareja = user.marry || 'Nadie';
    let description = user.description || 'Sin Descripción';
    let exp = user.exp || 0;
    let nivel = user.level || 0;
    let role = user.role || 'Sin Rango';
    let coins = user.coin || 0;
    let bankCoins = user.bank || 0;

    let perfil = await conn.profilePictureUrl(userId, 'image').catch(_ => 'https://cdn.russellxz.click/e06f9514.jpeg');

    let profileText = `
╭━━━〔 ✿ PERFIL ✿ 〕━━━╮
│ ✦ Nombre » @${userId.split('@')[0]}
│ ✦ Descripción » ${description}
│
│ ✦ Edad » ${user.age || 'Desconocida'}
│ ✦ Cumpleaños » ${cumpleanos}
│ ✦ Género » ${genero}
│ ✦ Casado con » ${pareja}
│
│ ✦ Experiencia » ${exp.toLocaleString()}
│ ✦ Nivel » ${nivel}
│ ✦ Rango » ${role}
│
│ ✦ Coins Cartera » ${coins.toLocaleString()} ${moneda}
│ ✦ Coins Banco » ${bankCoins.toLocaleString()} ${moneda}
│ ✦ Premium » ${user.premium ? '✅' : '❌'}
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`.trim();

    await conn.sendMessage(m.chat, { 
        text: profileText,
        contextInfo: {
            mentionedJid: [userId],
            externalAdReply: {
                title: '𝐏𝐄𝐑𝐅𝐈𝐋 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎',
                body: dev,
                thumbnailUrl: perfil,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m });
};

handler.help = ['profile'];
handler.tags = ['rg'];
handler.command = ['profile', 'perfil'];

export default handler;
