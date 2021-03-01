const Discord = require('discord.js');

module.exports = {
	name: 'ping',
        description: 'Gives bot ping',
        usage: '-ping',
        inHelp: 'yes',
        async run(client, message, args) {
                const embed = new Discord.MessageEmbed()
                .setTitle(`:ping_pong:TokiBot's Ping:`)
                .setDescription(`${Math.round(client.ws.ping)}ms`)
                .setFooter('Made by toki#0999')
        
                message.channel.send(embed);
	},
};
