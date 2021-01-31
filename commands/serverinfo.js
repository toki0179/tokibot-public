const Discord = require('discord.js');

module.exports = {
	name: 'serverinfo',
    description: 'Gives server info',
    usage: '-serverinfo',
    inHelp: 'yes',
        async run(client, message, args) {
            const { guild } = message

            const { name, region, memberCount, afkTimeout } = guild
            const icon = guild.iconURL()
        
            const owner = await message.guild.members.fetch(message.guild.ownerID);

            const embed = new Discord.MessageEmbed()
              .setTitle(`Server info for ${name}`)
              .setThumbnail(icon)
              .addFields(
                {
                  name: 'Region',
                  value: region,
                  inline: false
                },
                {
                  name: 'Members',
                  value: memberCount,
                  inline: false
                },
                {
                  name: 'Owner',
                  value: `${owner}`,
                  inline: false
                },
                {
                  name: 'AFK Timeout',
                  value: afkTimeout / 60,
                  inline: false
                }
              )
        
            message.channel.send(embed)
	},
};