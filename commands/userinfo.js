const moment = require('moment');
const { MessageEmbed } = require('discord.js');
const commando = require('discord.js-commando')


module.exports = {
	name: 'userinfo',
  description: 'Gives info on the specified user',
  usage: '-userinfo <user>',
  inHelp: 'yes',
	async run(client, message, args) {
        const { guild, channel } = message

    const user = message.mentions.users.first() || message.member.user
    const member = guild.members.cache.get(user.id)

    const embed = new MessageEmbed()
      .setAuthor(`User info for ${user.username}`, user.displayAvatarURL())
      .setImage(`${user.displayAvatarURL({size: 512})}`)
      .setFooter('Made by tokihub#1000')
      .addFields(
        {
          name: 'User tag',
          value: user.tag,
        },
        {
          name: 'Is bot',
          value: user.bot,
        },
        {
          name: 'Nickname',
          value: member.nickname || 'None',
        },
        {
          name: 'Joined Server',
          value: new Date(member.joinedTimestamp).toLocaleDateString(),
        },
        {
          name: 'Joined Discord',
          value: new Date(user.createdTimestamp).toLocaleDateString(),
        },
        {
          name: 'Roles',
          value: member.roles.cache.size - 1,
        }
      )

    channel.send(embed)
	},
};