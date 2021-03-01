const { ShardingManager } = require('discord.js');
const { token } = require('./config');

const manager = new ShardingManager('./bot.js', {
    token: token,
    totalShards: "auto",
    respawn: false
});

manager.on("shardCreate", shard => console.log(`[ ShardManager ] Launching shard #${shard.id}`));
manager.spawn();
