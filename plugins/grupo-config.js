let handler = async (m, { conn, args, usedPrefix, command }) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => icono)

  // 🌸 30 BORDES MIKU ALEATORIOS
  const bordesMiku = [
    ["╭🌸🌟🌈🌟🌸╮", "╰🌸🌟🌈🌟🌸╯"],
    ["✿┏彡💙🎤 MIKU ZONE 🎤💙彡┓✿", "✿┗彡💚🎶 VOCALOID 🎶💚彡┛✿"],
    ["💎💚╭━━━🌸MIKU🌸━━━╮💚💎", "💎💚╰━━━🎧INFO🎧━━━╯💚💎"],
    ["🌈🎶🔊《『", "』》🔊🎶🌈"],
    ["🔹🌟💠MikuBot Info💠🌟🔹", "🔹🌟💠Suki desu~💠🌟🔹"],
    ["💚🎧💫┏━━━━━━━━━━━━━━┓", "┗━━━━━━━━━━━━━━┛💫🎧💚"],
    ["🌸💿╭━M I K U━╮💿🌸", "🌸💿╰━B O T━╯💿🌸"],
    ["🎀🌟🌊✧ Vocaloid ✧🌊🌟🎀", "🎀🌟🌊✧ Status ✧🌊🌟🎀"],
    ["★彡[ 💙 MIKU STATUS 💙 ]彡★", "★彡[ 💚 Arigatou~ 💚 ]彡★"],
    ["🎧💙⟦ Vocaloid Core ⟧💙🎧", "🎧💙⟦ Harmony ⟧💙🎧"],
    ["💠✦⌈MikuBot⌋✦💠", "💠✦⌈Ready⌋✦💠"],
    ["⛩️💚🎵「 Miku Group 」🎵💚⛩️", "⛩️💚🎵「 Configurado 」🎵💚⛩️"],
    ["🎤🌸🌼🍬🌟「", "」🌟🍬🌼🌸🎤"],
    ["💿🌈🎧╭✿Hatsune✿╮🎧🌈💿", "💿🌈🎧╰✿Miku✿╯🎧🌈💿"],
    ["🎼💚《━━━━━━》💚🎼", "🎼💚《━━━━━━》💚🎼"],
    ["🌸🎧🫧╭━━━━༺MIKU༻━━━━╮🫧🎧🌸", "🌸🎧🫧╰━━━━༺BOT༻━━━━╯🫧🎧🌸"],
    ["╔═══════ஜ۩۞۩ஜ═══════╗", "╚═══════ஜ۩۞۩ஜ═══════╝"],
    ["✦╭──• Miku Group •──╮✦", "✦╰──• Ready •──╯✦"],
    ["(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ * Vocaloid * ✧ﾟ･:ヽ(◕ヮ◕ヽ)", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ * Arigatou~ * ✧ﾟ･:ヽ(◕ヮ◕ヽ)"],
    ["╭🌟💙🌈🎤 Grupo 🎤🌈💙🌟╮", "╰🌟💙🌈🎶 Config 🎶🌈💙🌟╯"],
    ["✿◕ ‿ ◕✿ Miku Control", "✿◕ ‿ ◕✿ Vocal Mode"],
    ["💚💿╭─━★ Miku Lock ★━─╮💿💚", "💚💿╰─━★ Done ★━─╯💿💚"],
    ["╭⛩️❀ MikuTools ❀⛩️╮", "╰⛩️❀ Ready ❀⛩️╯"],
    ["💫🎀 Vocaloid Group 🎀💫", "💫🎀 Configurado 🎀💫"],
    ["🎧╭──────────────╮🎧", "🎧╰──────────────╯🎧"],
    ["🍥🌟 *MIKU MODE* 🌟🍥", "🍥🌟 *UPDATE OK* 🌟🍥"],
    ["🌸✨╭⟦ Grupo Miku ⟧╮✨🌸", "🌸✨╰⟦ Completado ⟧╯✨🌸"],
    ["╭━━━(🎧MIKU🎧)━━━╮", "╰━━━(💙READY💙)━━━╯"],
    ["⭐🎶⌈ Vocaloid Status ⌋🎶⭐", "⭐🎶⌈ Admin Mode ⌋🎶⭐"],
    ["💎🎤 ︵︵︵︵︵︵︵", "︶︶︶︶︶︶︶ 🎤💎"]
  ]

  const [borde1, borde2] = bordesMiku[Math.floor(Math.random() * bordesMiku.length)]

  // Mensajes personalizados estilo Miku
  const opcionesTexto = [
    `💙 *¡Elige una opción kawaii para configurar el grupo!*`,
    `🎤 *Ops! Necesito saber si quieres abrir o cerrar este espacio mágico~*`,
    `🌟 *¿Abrimos la pista o la cerramos para ensayar?*`,
    `🎧 *No entendí MikuMiku~ dime 'abrir' o 'cerrar'*`,
    `💚 *Activa el modo idol usando: abrir / cerrar*`,
  ]

  const textoInvalido = opcionesTexto[Math.floor(Math.random() * opcionesTexto.length)]

  const opcionesAbrir = [
    `🎶 *Ya pueden escribir en este grupo, Miku les da la bienvenida!*`,
    `💚 *¡Listo! El grupo está abierto como un concierto~*`,
    `🎤 *A cantar, escribir y compartir, grupo abierto!*`,
    `🎵 *Grupo desbloqueado, ¡a charlar con estilo Vocaloid!*`,
  ]
  const opcionesCerrar = [
    `🔒 *Solo los administradores pueden escribir, Miku vigila~*`,
    `🎧 *Silencio por favor, solo los admins hablan ahora~*`,
    `🎀 *Grupo cerrado como backstage VIP!*`,
    `🚫 *Modo concierto silencioso activado~*`,
  ]

  let isClose = {
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '').toLowerCase()]

  if (isClose === undefined)
    return conn.reply(m.chat, `${borde1}\n\n${textoInvalido}\n\n✦ Ejemplos:\n✧ #${command} abrir\n✧ #${command} cerrar\n✧ #${command} open\n✧ #${command} close\n\n${borde2}`, m)

  await conn.groupSettingUpdate(m.chat, isClose)

  if (isClose === 'not_announcement') {
    const abrirMsg = opcionesAbrir[Math.floor(Math.random() * opcionesAbrir.length)]
    m.reply(`${borde1}\n\n${abrirMsg}\n\n${borde2}`)
  }

  if (isClose === 'announcement') {
    const cerrarMsg = opcionesCerrar[Math.floor(Math.random() * opcionesCerrar.length)]
    m.reply(`${borde1}\n\n${cerrarMsg}\n\n${borde2}`)
  }
}

handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['grupo']
handler.command = ['group', 'grupo']
handler.admin = true
handler.botAdmin = true

export default handler
