const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Gives user the bots invite!',
	async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Click here to invite!`)
        .setDescription('Click the link above to invite tokibot to your server!')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=798612206446968852&permissions=8&scope=bot')
        .setFooter('Made by tokihub#1000')
        
        message.channel.send(embed);
	},
};