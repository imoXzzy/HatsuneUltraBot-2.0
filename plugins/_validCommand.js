export async function before(m) {
  if (!m.text || !global.prefix.test(m.text)) return

  const usedPrefix = global.prefix.exec(m.text)[0]
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase()

  const validCommand = (command, plugins) => {
    for (let plugin of Object.values(plugins)) {
      if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
        return true
      }
    }
    return false
  }

  if (!command || command === "bot") return

  if (validCommand(command, global.plugins)) {
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]

    if (chat.isBanned) {
      const avisoDesactivado = `《✦》El bot *${botname}* está desactivado en este grupo.\n\n> ✦ Un *administrador* puede activarlo con el comando:\n> » *${usedPrefix}bot on*`
      await m.reply(avisoDesactivado)
      return
    }

    if (!user.commands) {
      user.commands = 0
    }
    user.commands += 1
  } else {
    const respuestasMiku = [
      "🌸💙 Miku-chan dice: *Ese comando no existe, nyan~!* 💙🌸",
      "🎤💫 Ups~ ¡Ese comando no está en mi repertorio musical!",
      "💚🎶 Miku: *¿Seguro que escribiste bien el comando?*",
      "🌈🔊 Comando no encontrado... ¡Revisa tu letra como una buena idol!",
      "💫💙 Miku no puede cantar eso... ¡intenta con otro comando!",
      "🎧🌸 *Ese comando suena mal... intenta otro más kawaii~*",
      "🍬🎵 *Error idol: Comando no reconocido por MikuBot*",
      "🪄🌟 ¡Nyaa~! ¡Ese comando no está en mi setlist!",
      "🦋💚 Lo siento, *Miku no entiende lo que dijiste* 🥺",
      "🌼🔊 Ese comando no hace música... prueba uno diferente~",
      "🎀💙 *Miku buscó en su playlist, pero no encontró ese comando.*",
      "✨🎤 *¡Comando desafinado!* Intenta con otro, onii-chan~",
      "🌸🎧 ¡Error Vocaloid! Comando inválido detectado.",
      "🎶🌈 Ese comando no existe en mi mundo de canciones~",
      "💚🎤 *¿Eh? Miku no conoce ese comando... intenta otra vez~*",
      "🌟🦋 Comando fantasma... ¡No está en mis archivos!",
      "🎵🫧 *Miku-chan: ese comando está fuera de tono~*",
      "🎧🎀 *¡Oopsie~! Ese comando no está en mi karaoke.*",
      "💫🎶 ¡No encontré ese comando! ¿Lo soñaste como una canción?",
      "💙🌸 *Ese comando no tiene ritmo... prueba otro diferente~*"
    ]

    const decoracion = respuestasMiku[Math.floor(Math.random() * respuestasMiku.length)]
    await m.reply(decoracion)
  }
}
