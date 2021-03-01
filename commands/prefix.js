const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
	name: 'prefix',
  description: 'Sets guilds prefix',
  usage: '-prefix <prefix>',
  inHelp: 'yes',
	async run(client, message, args) {

        const permEmbed = new Discord.MessageEmbed()
        .setTitle('ERROR!')
        .setDescription('You do not have the correct permissions to use this command!')
        .setFooter('Made by toki#0999')
        .setColor('#FF0000')

        const errorEmbed = new Discord.MessageEmbed()
        .setTitle('ERROR!')
        .setDescription('Please provide the prefix you would like to use!')
        .setFooter('Made by toki#0999')
        .setColor('#FF0000')

        const member = message.guild.member(message.author);

        if(!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return message.channel.send(permEmbed) 
          }

        if(!args[0]) return message.channel.send(errorEmbed)

        db.set(`prefix_${message.guild.id}`, args[0])

        const complete = new Discord.MessageEmbed()
        .setTitle('Prefix is now: ')
        .setDescription(`${args[0]}`)
        .setFooter('Made by toki#0999')
        .setColor('#32cd32')

        message.channel.send(complete)
	},
};
