let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  let user = global.db.data.users[userId]
  let name = conn.getName(userId)
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length
  let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

  let txt = `
╭━━━〔 『 Info-Bot 』 〕━━━╮
➣ help • menu
➣ uptime • runtime
➣ sc • script
➣ staff • colaboradores
➣ serbot • serbot code
➣ bots • sockets
➣ status • estado
➣ links • grupos
➣ infobot
➣ sug • newcommand
➣ p • ping
➣ reporte • reportar
➣ sistema • system
➣ speed • speedtest
➣ views • usuarios
➣ funciones • totalfunciones
➣ ds • fixmsgespera
➣ editautoresponder
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Buscadores 』 〕━━━╮
➣ tiktoksearch • tiktoks
➣ tweetposts
➣ ytsearch • yts
➣ githubsearch
➣ cuevana • cuevanasearch
➣ google
➣ pin • pinterest
➣ imagen • image
➣ infoanime
➣ hentaisearch • searchhentai
➣ xnxxsearch • xnxxs
➣ xvsearch • xvideossearch
➣ pornhubsearch • phsearch
➣ npmjs
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Descargas 』 〕━━━╮
➣ tiktok • tt
➣ mediafire • mf
➣ pinvid • pinvideo
➣ mega • mg
➣ play • play2
➣ ytmp3 • ytmp4
➣ fb • facebook
➣ twitter • x
➣ ig • instagram
➣ tts • tiktoks
➣ terabox • tb
➣ ttimg • ttmp3
➣ gitclone
➣ xvideosdl
➣ xnxxdl
➣ apk • modapk
➣ tiktokrandom • ttrandom
➣ npmdl • npmdownloader
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Economía 』 〕━━━╮
➣ w • work • trabajar
➣ slut • protituirse
➣ cf • suerte
➣ crime • crimen
➣ ruleta • roulette • rt
➣ casino • apostar
➣ slot
➣ cartera • wallet
➣ banco • bank
➣ deposit • depositar • d
➣ with • retirar • withdraw
➣ transfer • pay
➣ miming • minar • mine
➣ buyall • buy
➣ daily • diario
➣ cofre
➣ weekly • semanal
➣ monthly • mensual
➣ steal • robar • rob
➣ robarxp • robxp
➣ eboard • baltop
➣ aventura • adventure
➣ curar • heal
➣ cazar • hunt • berburu
➣ inv • inventario
➣ mazmorra • explorar
➣ halloween
➣ christmas • navidad
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Gacha 』 〕━━━╮
➣ rollwaifu • rw • roll
➣ claim • c • reclamar
➣ harem • waifus • claims
➣ charimage • waifuimage • wimage
➣ charinfo • winfo • waifuinfo
➣ givechar • givewaifu • regalar
➣ vote • votar
➣ waifusboard • waifustop • topwaifus
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Stickers 』 〕━━━╮
➣ sticker • s
➣ setmeta
➣ delmeta
➣ pfp • getpic
➣ qc
➣ toimg • img
➣ brat • ttp • attp
➣ emojimix
➣ wm
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Herramientas 』 〕━━━╮
➣ calcular • cal
➣ tiempo • clima
➣ horario
➣ fake • fakereply
➣ enhance • remini • hd
➣ letra
➣ read • readviewonce • ver
➣ whatmusic • shazam
➣ ss • ssweb
➣ length • tamaño
➣ say • decir
➣ todoc • todocument
➣ translate • traducir • trad
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Perfil 』 〕━━━╮
➣ reg • verificar • register
➣ unreg
➣ profile
➣ marry • [mencion]
➣ divorce
➣ setgenre • setgenero
➣ delgenre • delgenero
➣ setbirth • setnacimiento
➣ delbirth • delnacimiento
➣ setdescription • setdesc
➣ deldescription • deldesc
➣ lb • lboard • <pagina>
➣ level • lvl • <@mencion>
➣ comprarpremium • premium
➣ confesiones • confesar
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Grupos 』 〕━━━╮
➣ hidetag
➣ gp • infogrupo
➣ linea • listonline
➣ setwelcome
➣ setbye
➣ link
➣ admins • admin
➣ restablecer • revoke
➣ grupo • group [open/abrir]
➣ grupo • gruop [close/cerrar]
➣ kick • [numero/mencion]
➣ add • añadir • agregar • [numero]
➣ promote • [mencion]
➣ demote • [mencion]
➣ gpbanner • groupimg
➣ gpname • groupname
➣ gpdesc • groupdesc
➣ advertir • warn • warning
➣ unwarn • delwarn
➣ advlist • listadv
➣ bot on
➣ bot off
➣ mute • [mencion]
➣ unmute • [mencion]
➣ encuesta • poll
➣ delete • del
➣ fantasmas
➣ kickfantasmas
➣ invocar • tagall • todos
➣ setemoji • setemo
➣ listnum • kicknum
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Anime 』 〕━━━╮
➣ angry • enojado • [mencion]
➣ bite • [mencion]
➣ bleh • [mencion]
➣ blush • [mencion]
➣ bored • aburrido • [mencion]
➣ cry • [mencion]
➣ cuddle • [mencion]
➣ dance • [mencion]
➣ drunk • [mencion]
➣ eat • comer • [mencion]
➣ facepalm • [mencion]
➣ happy • feliz • [mencion]
➣ hug • [mencion]
➣ impregnate • preg • [mencion]
➣ kill • [mencion]
➣ kiss • besar • kiss2 • [mencion]
➣ laugh • [mencion]
➣ lick • [mencion]
➣ love • amor • [mencion]
➣ pat • [mencion]
➣ poke • [mencion]
➣ pout • [mencion]
➣ punch • [mencion]
➣ run • [mencion]
➣ sad • triste • [mencion]
➣ scared • [mencion]
➣ seduce • [mencion]
➣ shy • timido • [mencion]
➣ slap • [mencion]
➣ dias • days
➣ noches • nights
➣ sleep • [mencion]
➣ smoke • [mencion]
➣ think • [mencion]
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 NSFW 』 〕━━━╮
➣ anal • [mencion]
➣ waifu
➣ bath • [mencion]
➣ blowjob • mamada • bj • [mencion]
➣ boobjob • [mencion]
➣ cum • [mencion]
➣ fap • [mencion]
➣ ppcouple • ppcp
➣ footjob • [mencion]
➣ fuck • coger • fuck2 • [mencion]
➣ cafe • coffe
➣ violar • perra • [mencion]
➣ grabboobs • [mencion]
➣ grop • [mencion]
➣ lickpussy • [mencion]
➣ rule34 • r34 • [tags]
➣ sixnine • 69 • [mencion]
➣ spank • nalgada • [mencion]
➣ suckboobs • [mencion]
➣ undress • encuerar • [mencion]
➣ yuri • tijeras • [mencion]
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━〔 『 Juegos 』 〕━━━╮
➣ amistad • amigorandom
➣ chaqueta • jalamela
➣ chiste
➣ consejo
➣ doxeo • doxear • [mencion]
➣ facto
➣ formarpareja
➣ formarpareja5
➣ frase
➣ huevo
➣ chupalo • [mencion]
➣ aplauso • [mencion]
➣ marron • [mencion]
➣ suicidar
➣ iq • iqtest • [mencion]
➣ meme
➣ morse
➣ nombreninja
➣ paja • pajeame
➣ personalidad • [mencion]
➣ piropo
➣ pregunta
➣ ship • pareja
➣ sorteo
➣ top
➣ formartrio • [mencion]
➣ ahorcado
➣ mates • matematicas
➣ ppt
➣ sopa • buscarpalabra
➣ pvp • suit • [mencion]
➣ ttt
╰━━━━━━━━━━━━━━━━━━━━━━━━━━╯
`

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
      }
    }
  }, { quoted: m })
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