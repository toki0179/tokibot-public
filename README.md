# TokiBot

TokiBot is still work in work in progress and has many bugs!

# ToDo

- [ ] Add aliases
- [ ] All moderation commands
- [ ] Add music commands
- [ ] Add Levelling system
- [ ] More soon
- [ ] Add economy system
- [x] Add basic command handler

# Installation guide

- Download all the dependencies using ```npm i``` 

You might have to individually install them and if that is the case a list of all modules will be listed below:

- discord.js
- quick.db
- weather-js
- moment
- discord.js-commando

After you have installed you need to put your token in config.json.
TokiBot is now ready to run!

# How to add your own commands
To add your own commands you just need to follow this template:
```js
module.exports = {
	name: 'ping',
        description: 'Gives bot ping',
        usage: '-ping',
        inHelp: 'yes',
        async run(client, message, args) {
          //code goes here!
	},
};
```
