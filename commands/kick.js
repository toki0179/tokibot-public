const Discord = require('discord.js');

module.exports = {
	name: 'kick',
    description: 'Kicks the mentioned user',
    usage: '-kick <user>',
    inHelp: 'yes',
	async run(client, message, args) {
		
		const permEmbed = new Discord.MessageEmbed()
		.setTitle('ERROR!')
        .setDescription('You do not have the correct permissions to use this command!')
        .setFooter('Made by tokihub#1000')
		.setColor('#FF0000')
		
		const botPermEmbed = new Discord.MessageEmbed()
		.setTitle('ERROR!')
        .setDescription('I do not have the correct permissions to succesfully execute this command!')
        .setFooter('Made by tokihub#1000')
        .setColor('#FF0000')

		const argsEmbed = new Discord.MessageEmbed()
		.setTitle('ERROR!')
        .setDescription('There are no arguments please mention the user you would like to kick!')
        .setFooter('Made by tokihub#1000')
        .setColor('#FF0000')

		const userErrorEmbed = new Discord.MessageEmbed()
		.setTitle('ERROR!')
        .setDescription('The user could not be found please retry!')
        .setFooter('Made by tokihub#1000')
		.setColor('#FF0000')
		
		const kickErrorEmbed = new Discord.MessageEmbed()
		.setTitle('ERROR!')
        .setDescription('This user can\'t be kicked. It is either because they are a mod/admin, or their highest role is higher than mine!')
        .setFooter('Made by tokihub#1000')
		.setColor('#FF0000')
		
		const kickYourselfEmbed = new Discord.MessageEmbed()
		.setTitle('ERROR!')
        .setDescription('Bruh, you can\'t kick yourself!')
        .setFooter('Made by tokihub#1000')
		.setColor('#FF0000')

		const errorEmbed = new Discord.MessageEmbed()
		.setTitle('ERROR!')
        .setDescription('Something went wrong!')
        .setFooter('Made by tokihub#1000')
		.setColor('#FF0000')

		if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(permEmbed)
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(botPermEmbed)

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send(argsEmbed);

        if(!member) return message.channel.send(userErrorEmbed);
        if(!member.kickable) return message.channel.send(kickErrorEmbed);

        if(member.id === message.author.id) return message.channel.send(kickYourselfEmbed);

        let reason = args.slice(1).join(" ");

        if(reason === undefined) reason = 'Unspecified';

        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send(errorEmbed)
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Member Kicked')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
		.setFooter(client.user.displayAvatarURL())
		.setColor('#32cd32')

        message.channel.send(kickembed);

	},
};