const { token } = require('./config.json')

const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./bot.js', { token: token });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn();
