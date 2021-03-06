const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'emoji',
  aliases: [],
  guildOnly: true,
  group: 'utility',
  description: 'Display the larger version of the supplied emoji',
  examples: [],
  parameters: ['emoji'],
  run: async (client, message, [ emoji ]) => {

    if (!emoji || !emoji.match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/))
      return message.channel.send(`<:cancel:712586986216489011> | ${message.author}, please enter a valid custom emoji!`)

    const emojiID = emoji.match(/\d{17,19}/)[0]

    return message.channel.send(new MessageEmbed()
                                    .setColor('GREY')
                                    .setImage(`https://cdn.discordapp.com/emojis/${emojiID}`)
                                    .setFooter(emoji.match(/\w{2,32}/)[0]))

  }
}
