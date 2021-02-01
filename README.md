# TokiBot

TokiBot is still work in work in progress and has many bugs!

# ToDo

- [ ] Add aliases
- [ ] All moderation commands
- [ ] Add music commands
- [ ] Add Levelling system
- [ ] More soon
- [ ] Add economy system
- [ ] Add a better help command
- [x] Add basic command handler

# Installation guide

- Download all the dependencies using ```npm i``` 
If you do not know how to host a bot or have no knowledge in javascript then please do some research before installing this!

After you have installed you need to put your token in config.json.
TokiBot is now ready to run!

# How to add your own commands
To add your own commands you just need to follow this template:
```js
module.exports = {
	name: 'example',
        description: 'This is an example!',
        usage: '-example',
        inHelp: 'yes',
        async run(client, message, args) {
		//code goes here!
	},
};
```
