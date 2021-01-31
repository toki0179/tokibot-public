const { MessageEmbed } = require('discord.js')
const os = require('os')

var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();

var  getpercentage = 
  ((usedMemory/totalMemory) * 100).toFixed(2) + '%'

console.log("Memory used in GB", (usedMemory/ Math.pow(1024, 3)).toFixed(2))
console.log("Used memory" , getpercentage);


module.exports = {
	name: 'botinfo',
    description: 'Gives info on the bot',
    usage: '-botinfo',
    inHelp: 'yes',
	async run(client, message, args) {
        const embed = new MessageEmbed()
        .setThumbnail(client.user.displayAvatarURL())
        .setTitle('Bot Stats')
        .setColor('#000000')
        .addFields(
            {
                name: '🌐 Servers',
                value: `Serving ${client.guilds.cache.size} servers.`,
                inline: false
            },
            {
                name: '📺 Channels',
                value: `Serving ${client.channels.cache.size} channels.`,
                inline: false
            },
            {
                name: '👥 Server Users',
                value: `Serving ${client.users.cache.size}`,
                inline: false
            },
            {
                name: '⏳ Ping',
                value: `${Math.round(client.ws.ping)}ms`,
                inline: false
            },
            {
                name: 'Memory Used',
                value: `Memory used, ${(usedMemory/ Math.pow(1024, 3)).toFixed(2)} GB`,
                inline: false
            },
            {
                name: 'Memory Usage',
                value: `Memory usage, ${getpercentage}`,
                inline: false
            },
            {
                name: 'Server Info',
                value: `Cores: ${os.cpus().length}`,
                inline: false
            },
            {
                name: 'Join Date',
                value: client.user.createdAt,
                inline: false
            }
        )
        .setFooter(`Created By: ${message.author.tag}`, message.author.displayAvatarURL())

    await message.channel.send(embed)
	},
};