const Discord = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`:ping_pong:TokiBot's Ping:`)
        .setDescription(`${Math.round(client.ws.ping)}ms`)
        .setFooter('Made by tokihub#1000')
        
        message.channel.send(embed);
	},
};