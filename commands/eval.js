const Discord = require('discord.js');
const { ownerID } = require('../config.json');

const clean = text => {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }                  

module.exports = {
	name: 'eval',
        description: 'Runs any js code!',
        usage: '-eval',
        inHelp: 'yes',
        async run(client, message, args) {

            const ownerEmbed = new Discord.MessageEmbed()
            .setTitle('ERROR!')
            .setDescription('Only the owner of the bot can run this command!')
            .setFooter('Made by toki#0999')
            .setColor('#FF0000')

            if(message.author.id !== ownerID) return message.channel.send(ownerEmbed);
    try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
	},
};
