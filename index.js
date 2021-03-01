//Do not edit any of this if you do not understand it

const { ShardingManager } = require('discord.js');
const { token } = require('./config');

const manager = new ShardingManager('./bot.js', {
    token: token,
    totalShards: "auto",
    shardList: "auto",
    respawn: false
});

manager.on("shardCreate", shard => console.log(`[ ShardManager ] Launching shard #${shard.id}`));
manager.spawn();
