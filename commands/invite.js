const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'Gives user the bots invite!',
	async run(client, message, args) {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Click here to invite!`)
        .setImage('https://images-ext-1.discordapp.net/external/cIGdhvrS8lklrqn_LG8BSvOo5C7GkJf9HHEsmZu5MAI/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/798612206446968852/0851853ef21e32ef0c18f8da0c07f627.webp?width=683&height=683')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=798612206446968852&permissions=8&scope=bot')
        .setFooter('Made by tokihub#1000')
        
        message.channel.send(embed);
	},
};