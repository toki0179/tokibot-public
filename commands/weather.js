const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
	name: 'weather',
    description: 'Checks weather',
    usage: '-weather <location>',
    inHelp: 'yes',
	async run(client, message, args) {
        weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
            
            const specifyEmbed = new Discord.MessageEmbed()
            .setTitle('ERROR!')
            .setDescription('Please specify a location!')
            .setFooter('Made by toki#0999')
		    .setColor('#FF0000')

            const invalidEmbed = new Discord.MessageEmbed()
            .setTitle('ERROR!')
            .setDescription('Location is invalid!')
            .setFooter('Made by toki#0999')
		    .setColor('#FF0000')

            if(error) return message.channel.send(specifyEmbed);
            if(!args[0]) return message.channel.send(specifyEmbed)
    
            if(result === undefined || result.length === 0) return message.channel.send(invalidEmbed);
    
            var current = result[0].current;
            var location = result[0].location;
    
            const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .setColor('#32cd32')
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', 'Celsius', true)
            .addField('Temperature', `${current.temperature}°`, true)
            .addField('Wind', current.winddisplay, true)
            .addField('Feels like', `${current.feelslike}°`, true)
            .addField('Humidity', `${current.humidity}%`, true)
    
    
            message.channel.send(weatherinfo)
        })
    }
}
