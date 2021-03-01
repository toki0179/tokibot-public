const Discord = require('discord.js');

module.exports = {
        name: 'avatar',
        description: 'Gives a users avatar!',
        usage: '-avatar <user>',
        inHelp: 'yes',
	async run(client, message, args) {
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})

        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s Avatar`)
        .setImage(avatar)
        .setFooter('Made by toki#0999')
        
        message.channel.send(embed);
	},
};
