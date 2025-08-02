let handler = async (m, { conn, args }) => {
let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
let user = global.db.data.users[userId]
let name = conn.getName(userId)
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
let txt = `

╭━━━〔 Info-Bot 〕━━━╮
┃➣ Cliente     » @${userId.split('@')[0]}
┃➣ Modo       » Publico
┃➣ Bot        » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Prem Bot 🅑')}
┃➣ Activada   » ${uptime}
┃➣ Usuarios   » ${totalreg}
┃➣ Comandos   » ${totalCommands}
┃➣ Baileys    » Multi Device
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Comandos 〕━━━╮
┃➣ help
┃➣ uptime
┃➣ sc
┃➣ staff
┃➣ serbot
┃➣ bots
┃➣ status
┃➣ links
┃➣ infobot
┃➣ sug
┃➣ p
┃➣ reporte
┃➣ sistema
┃➣ speed
┃➣ views
┃➣ funciones
┃➣ ds
┃➣ editautoresponder
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Buscadores 〕━━━╮
┃➣ tiktoksearch
┃➣ tweetposts
┃➣ ytsearch
┃➣ githubsearch
┃➣ cuevana
┃➣ google
┃➣ pin
┃➣ imagen
┃➣ infoanime
┃➣ hentaisearch
┃➣ xnxxsearch
┃➣ xvsearch
┃➣ pornhubsearch
┃➣ npmjs
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Descargas 〕━━━╮
┃➣ tiktok
┃➣ mediafire
┃➣ pinvid
┃➣ mega
┃➣ play
┃➣ ytmp3
┃➣ fb
┃➣ twitter
┃➣ ig
┃➣ tts
┃➣ terabox
┃➣ ttimg
┃➣ gitclone
┃➣ xvideosdl
┃➣ xnxxdl
┃➣ apk
┃➣ tiktokrandom
┃➣ npmdl
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Economia 〕━━━╮
┃➣ w
┃➣ slut
┃➣ cf
┃➣ crime
┃➣ ruleta
┃➣ casino
┃➣ slot
┃➣ cartera
┃➣ banco
┃➣ deposit
┃➣ with
┃➣ transfer
┃➣ miming
┃➣ buyall
┃➣ daily
┃➣ cofre
┃➣ weekly
┃➣ monthly
┃➣ steal
┃➣ robarxp
┃➣ eboard
┃➣ aventura
┃➣ curar
┃➣ cazar
┃➣ inv
┃➣ mazmorra
┃➣ halloween
┃➣ christmas
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Gacha 〕━━━╮
┃➣ rollwaifu
┃➣ claim
┃➣ harem
┃➣ charimage
┃➣ charinfo
┃➣ givechar
┃➣ vote
┃➣ waifusboard
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Stickers 〕━━━╮
┃➣ sticker
┃➣ setmeta
┃➣ delmeta
┃➣ pfp
┃➣ qc
┃➣ toimg
┃➣ brat
┃➣ emojimix
┃➣ wm
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Herramientas 〕━━━╮
┃➣ calcular
┃➣ tiempo
┃➣ horario
┃➣ fake
┃➣ enhance
┃➣ letra
┃➣ read
┃➣ whatmusic
┃➣ ss
┃➣ length
┃➣ say
┃➣ todoc
┃➣ translate
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Perfil 〕━━━╮
┃➣ reg
┃➣ unreg
┃➣ profile
┃➣ marry
┃➣ divorce
┃➣ setgenre
┃➣ delgenre
┃➣ setbirth
┃➣ delbirth
┃➣ setdescription
┃➣ deldescription
┃➣ lb
┃➣ level
┃➣ comprarpremium
┃➣ confesiones
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Grupos 〕━━━╮
┃➣ hidetag
┃➣ gp
┃➣ linea
┃➣ setwelcome
┃➣ setbye
┃➣ link
┃➣ admins
┃➣ restablecer
┃➣ grupo open
┃➣ grupo close
┃➣ kick
┃➣ add
┃➣ promote
┃➣ demote
┃➣ gpbanner
┃➣ gpname
┃➣ gpdesc
┃➣ advertir
┃➣ unwarn
┃➣ advlist
┃➣ bot on
┃➣ bot off
┃➣ mute
┃➣ unmute
┃➣ encuesta
┃➣ delete
┃➣ fantasmas
┃➣ kickfantasmas
┃➣ invocar
┃➣ setemoji
┃➣ listnum
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Anime 〕━━━╮
┃➣ angry
┃➣ bite
┃➣ bleh
┃➣ blush
┃➣ bored
┃➣ cry
┃➣ cuddle
┃➣ dance
┃➣ drunk
┃➣ eat
┃➣ facepalm
┃➣ happy
┃➣ hug
┃➣ impregnate
┃➣ kill
┃➣ kiss
┃➣ laugh
┃➣ lick
┃➣ love
┃➣ pat
┃➣ poke
┃➣ pout
┃➣ punch
┃➣ run
┃➣ sad
┃➣ scared
┃➣ seduce
┃➣ shy
┃➣ slap
┃➣ dias
┃➣ noches
┃➣ sleep
┃➣ smoke
┃➣ think
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 NSFW 〕━━━╮
┃➣ anal
┃➣ waifu
┃➣ bath
┃➣ blowjob
┃➣ boobjob
┃➣ cum
┃➣ fap
┃➣ ppcouple
┃➣ footjob
┃➣ fuck
┃➣ cafe
┃➣ violar
┃➣ grabboobs
┃➣ grop
┃➣ lickpussy
┃➣ rule34
┃➣ sixnine
┃➣ spank
┃➣ suckboobs
┃➣ undress
┃➣ yuri
╰━━━━━━━━━━━━━━━━━━╯

╭━━━〔 Juegos 〕━━━╮
┃➣ amistad
┃➣ chaqueta
┃➣ chiste
┃➣ consejo
┃➣ doxeo
┃➣ facto
┃➣ formarpareja
┃➣ formarpareja5
┃➣ frase
┃➣ huevo
┃➣ chupalo
┃➣ aplauso
┃➣ marron
┃➣ suicidar
┃➣ iq
┃➣ meme
┃➣ morse
┃➣ nombreninja
┃➣ paja
┃➣ personalidad
┃➣ piropo
┃➣ pregunta
┃➣ ship
┃➣ sorteo
┃➣ top
┃➣ formartrio
┃➣ ahorcado
┃➣ mates
┃➣ ppt
┃➣ sopa
┃➣ pvp
┃➣ ttt
╰━━━━━━━━━━━━━━━━━━╯
`.trim()
await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
externalAdReply: {                
title: botname,
body: textbot,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: true
}}}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
let seconds = Math.floor((ms / 1000) % 60)
let minutes = Math.floor((ms / (1000 * 60)) % 60)
let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
return `${hours}h ${minutes}m ${seconds}s`
}
