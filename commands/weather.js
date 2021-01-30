const Discord = require('discord.js');
const weather = require('weather-js');

module.exports = {
	name: 'weather',
	description: 'checks weather',
	async run(client, message, args) {
        weather.find({search: args.join(" "), degreeType: 'F'}, function (error, result){
            // 'C' can be changed to 'F' for farneheit results
            
            const specifyEmbed = new Discord.MessageEmbed()
            .setTitle('ERROR!')
            .setDescription('Please specify a location!')
            .setFooter('Made by tokihub#1000')
		    .setColor('#FF0000')

            const invalidEmbed = new Discord.MessageEmbed()
            .setTitle('ERROR!')
            .setDescription('Location is invalid!')
            .setFooter('Made by tokihub#1000')
		    .setColor('#FF0000')

            if(error) return message.channel.send(error);
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