const Discord = require('discord.js');

module.exports = {
	name: 'help',
        description: 'Shows all commands in the bot',
        usage: '-help',
        inHelp: 'yes',
        async run(client, message, args) {
            const embed = new Discord.MessageEmbed()
            .setTitle('Help!')
            .addFields(
                {
                    name: '-help',
                    value: 'Provides all commands in the bot.',
                    inline: true
                },
                {
                    name: '-avatar <user>',
                    value: 'Provides a users avatar.',
                    inline: true
                },
                {
                    name: '-botinfo',
                    value: 'Provides info on the bot.',
                    inline: true
                },
                {
                    name: '-invite',
                    value: 'Provides the bot invite.',
                    inline: true
                },
                {
                    name: '-kick <user>',
                    value: 'Kicks the mentioned user.',
                    inline: true
                },
                {
                    name: '-ping',
                    value: 'Provides the bots ping.',
                    inline: true
                },
                {
                    name: '-prefix <prefix>',
                    value: 'Allows a user to set the prefix.',
                    inline: true
                },
                {
                    name: '-serverinfo',
                    value: 'Provides info on the server.',
                    inline: true
                },
                {
                    name: '-userinfo <user>',
                    value: 'Provides info on the mentioned user.',
                    inline: true
                },
                {
                    name: '-weather <location>',
                    value: 'Provides info on the weather in the specified location.',
                    inline: true
                }
                )
                message.channel.send(embed)
	},
};