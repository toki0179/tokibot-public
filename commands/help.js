const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
	name: 'help',
        description: 'Shows all commands in the bot',
        usage: '-help',
        inHelp: 'yes',
        async run(client, message, args) {
            let prefix = db.get(`prefix_${message.guild.id}`)

            const defaultprefix = '+'

            if(prefix === null) prefix = defaultprefix
            
            const embed = new Discord.MessageEmbed()
            .setTitle('Help!')
            .addFields(
                {
                    name: `${prefix}help`,
                    value: 'Provides all commands in the bot.',
                    inline: true
                },
                {
                    name: `${prefix}avatar <user>`,
                    value: 'Provides a users avatar.',
                    inline: true
                },
                {
                    name: `${prefix}botinfo`,
                    value: 'Provides info on the bot.',
                    inline: true
                },
                {
                    name: `${prefix}invite`,
                    value: 'Provides the bot invite.',
                    inline: true
                },
                {
                    name: `${prefix}kick <user>`,
                    value: 'Kicks the mentioned user.',
                    inline: true
                },
                {
                    name: `${prefix}ping`,
                    value: 'Provides the bots ping.',
                    inline: true
                },
                {
                    name: `${prefix}prefix <prefix>`,
                    value: 'Allows a user to set the prefix.',
                    inline: true
                },
                {
                    name: `${prefix}serverinfo`,
                    value: 'Provides info on the server.',
                    inline: true
                },
                {
                    name: `${prefix}userinfo <user>`,
                    value: 'Provides info on the mentioned user.',
                    inline: true
                },
                {
                    name: `${prefix}weather <location>`,
                    value: 'Provides info on the weather in the specified location.',
                    inline: true
                }
                )
                message.channel.send(embed)
	},
};